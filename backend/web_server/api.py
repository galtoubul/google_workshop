import sys
import os
import ast
from flask import Flask, request, jsonify
from flask.helpers import make_response
from flask_cors import CORS, cross_origin
from flaskext.mysql import MySQL
import requests
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
sys.path.append(os.path.abspath('../db'))
import backend.db.db_manipulate as db
sys.path.append(os.path.abspath('../')) 
from config import web_app_client_id, ERR, db_host, db_user, db_password, db_database
from backend.web_server.auto_track import getDeliveryStatus


app = Flask(__name__)

CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = db_user
app.config['MYSQL_DATABASE_PASSWORD'] = db_password
app.config['MYSQL_DATABASE_DB'] = db_database
app.config['MYSQL_DATABASE_HOST'] = db_host
mysql.init_app(app)
db.init_con(mysql)


# Validate that the access token from the chrome extension is valid
# If it is valid returns the user's details (including user_id)
def authenticate_chrome_ext(access_token):
    authorization_header = {'Authorization': f'Bearer {access_token}'}
    google_apis_url = 'https://www.googleapis.com/oauth2/v3/userinfo'

    try:
        response = requests.request('GET', google_apis_url, headers=authorization_header)
    except requests.exceptions.RequestException as err:
        print(f'\n\nauthenticate_chrome_ext\n error: {err}')
        return ERR
    
    response_dict = response.json()
    print(f'\n\nuse_chrome_ext_client_id\nresponse = {response_dict}')

    if 'error' in response_dict:
        err = response_dict['error_description'] if 'error_description' in response_dict else response_dict['error']
        print(f'\ninvalid token: {err}', flush=True)
        return ERR

    return response_dict


def get_user_info(token_id, use_chrome_ext_client_id=False):
    print(f'\n\nget_user_info\ntoken_id = {token_id}\nuse_chrome_ext_client_id = {use_chrome_ext_client_id}', flush=True)

    try:
        if use_chrome_ext_client_id:
            return authenticate_chrome_ext(access_token=token_id)
        return id_token.verify_oauth2_token(token_id, google_requests.Request(), web_app_client_id)

    except ValueError as err:
        print(f'\ninvalid token: {err}', flush=True)
        return ERR


@app.after_request
def after_request(response):
    print('\n\nafter_request\n', flush=True)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


def get_response(data, code=200):
    response = make_response(jsonify(data), code)
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers["Content-Type"] = "application/json"
    return response


def json_bytes_to_dict(json_bytes):
    print(f'\n\njson_bytes_to_dict\njson_bytes = {json_bytes}')
    string_dict = (json_bytes.decode()).strip("'")
    print(f'\n\njson_bytes_to_dict\nstring_dict = {string_dict}')
    dict = ast.literal_eval(string_dict)
    return dict


track_api_to_bucket = {
    'pending': 'Paid',
    'transit': 'Transit',
    'pickup': 'PickUp',
    'delivered': 'Arrived'
}

#TODO: cancel check to arrived
def update_cards_if_needed(not_updated_cards):
    for card in not_updated_cards:
        serial_code = card['order_serial_code']
        bucket = card['timeline_position']

        curr_bucket = getDeliveryStatus(serial_code)
        if curr_bucket == ERR:
            continue

        if curr_bucket in track_api_to_bucket and track_api_to_bucket[curr_bucket] != bucket:
            data = {
                'card_id': card['card_id'], 
                'order_name': card['order_name'], 
                'timeline_position': track_api_to_bucket[curr_bucket]
            }
            db.update_card(data)


@app.route('/api/getCards', methods=['POST'])
@cross_origin()
def retrieve_cards():
    print(f'\n\ngetCards\nheaders = {request.headers}\nrequest.data = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)
    print(f'\n\ndata_dict = {data_dict}', flush=True)

    if 'token_id' not in data_dict:
        return get_response({'response':f'Didn\'t supplied token_id'}, 400)

    use_chrome_ext_client_id = True if 'use_chrome_ext_client_id' in data_dict else False
    user_info = get_user_info(data_dict['token_id'], use_chrome_ext_client_id)

    if user_info == ERR:
        return get_response({'response':'Couldn\'t authenticate user via Google'}, 403)

    user_id = user_info['sub']
    print(f'\n\nuser_id = {user_id}', flush=True)

    # not_updated_cards = db.get_not_updated_cards(user_id)
    # update_cards_if_needed(not_updated_cards)

    bucket = None if 'timeline_position' not in request.args else request.args.get('timeline_position')
    cards = db.get_cards(user_id, bucket)
    
    print(f'\n\ncards = {cards}', flush=True)
    return get_response(cards)


@app.route('/api/addCard', methods=['POST'])
@cross_origin()
def add_card():
    print(f'\n\naddCard\nheaders = {request.headers}\nrequest.data = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)
    print(f'\n\ndata_dict = {data_dict}', flush=True)

    for necessary_val in ['token_id', 'order_name', 'card_id']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    use_chrome_ext_client_id = True if 'use_chrome_ext_client_id' in data_dict else False
    user_info = get_user_info(data_dict['token_id'], use_chrome_ext_client_id)

    if user_info == ERR:
        return get_response({'response':'Couldn\'t authenticate user via Google'}, 403)

    res = db.add_card(data_dict, user_info)
    return get_response(res)


@app.route('/api/updateCard', methods=['POST'])
@cross_origin()
def update_card():
    print(f'\n\nupdate_card\nheaders = {request.headers}\nrequest.data = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)
    print(f'\n\ndata_dict = {data_dict}', flush=True)

    for necessary_val in ['token_id', 'card_id', 'order_name']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    use_chrome_ext_client_id = True if 'use_chrome_ext_client_id' in data_dict else False
    user_info = get_user_info(data_dict['token_id'], use_chrome_ext_client_id)

    if user_info == ERR:
        return get_response({'response':'Couldn\'t authenticate user via Google'}, 403)

    data_dict['user_id'] = user_info['sub']
    res = db.update_card(data_dict)

    resp = get_response(res)
    resp.headers["Accept-Post"] = "*/*"
    resp.headers["Accept"] = "*/*"

    return resp


@app.route('/api/deleteCard', methods=['POST'])
def delete_card():
    print('\n\ndeleteCard\nheaders = {request.headers}\ndata = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)
    print('\n\ndata_dict = ', data_dict, flush=True)

    for necessary_val in ['token_id', 'card_id', 'order_name']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    use_chrome_ext_client_id = True if 'use_chrome_ext_client_id' in data_dict else False
    user_info = get_user_info(data_dict['token_id'], use_chrome_ext_client_id)

    if user_info == ERR:
        return get_response({'response':'Couldn\'t authenticate user via Google'}, 403)

    res = db.delete_card(data_dict['card_id'], data_dict['order_name'])
    return get_response(res)
