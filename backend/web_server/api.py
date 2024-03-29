import sys
import os
import ast
import time
import concurrent.futures
from flask import Flask, request, jsonify
from flask.helpers import make_response
from flask_cors import CORS, cross_origin
from flaskext.mysql import MySQL
import requests
sys.path.append(os.path.abspath('../db'))
CURRPATH, TAIL = os.path.split(os.getcwd())
while CURRPATH != "/":
    if TAIL == 'google_workshop':
        if os.path.join(CURRPATH, TAIL) not in sys.path:
            sys.path.append(os.path.join(CURRPATH, TAIL))
        break
    CURRPATH, TAIL = os.path.split(CURRPATH)
import backend.db.db_manipulate as db
sys.path.append(os.path.abspath('../')) 
from config import ERR, SUCCESS, db_host, db_user, db_password, db_database
from backend.web_server.tracking_more import getDeliveryStatus


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


@app.after_request
def after_request(response):
    print('\n\nafter_request\n', flush=True)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


def get_response(data, code=200):
    print(f'\n\nget_response\nresponse_code = {code}\nresponse_data = {data}')
    response = make_response(jsonify(data), code)
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers["Content-Type"] = "application/json"
    return response


def json_bytes_to_dict(json_bytes):
    string_dict = (json_bytes.decode()).strip("'")
    dict = ast.literal_eval(string_dict)
    return dict


def create_err(ret):
    data = {'error': ret['error']}
    if 'error_description' in ret:
        data['error_description'] = ret['error_description']
    return get_response(data, ret['return_code'])


# Validate that the access token (which is sent as token id) is valid
# If it is valid returns the user's details (including user_id)
def authenticate_user(data_dict):   
    use_chrome_ext_client_id = True if 'use_chrome_ext_client_id' in data_dict else False
    print(f'\n\nauthenticate_user\nuse_chrome_ext_client_id = {use_chrome_ext_client_id}', flush=True)

    try:
        access_token=data_dict['token_id']
        authorization_header = {'Authorization': f'Bearer {access_token}'}
        google_apis_url = 'https://www.googleapis.com/oauth2/v3/userinfo'
        response = requests.request('GET', google_apis_url, headers=authorization_header)
    except requests.exceptions.RequestException as err:
        return {'status': ERR,
                'error': 'Couldn\'t authenticate user via Google',
                'error_description': str(err),
                'return_code': 403}
    
    response_dict = response.json()

    if 'error' in response_dict:
        err = response_dict['error_description'] if 'error_description' in response_dict else response_dict['error']
        return {'status': ERR,
                'error': 'Couldn\'t authenticate user via Google',
                'error_description': str(err),
                'return_code': 403}

    return {'status': SUCCESS, 'user_info': response_dict}


def check_necessary_values(data_dict, necessary_values):
    for necessary_val in necessary_values:
        if necessary_val not in data_dict:
            return {'status': ERR,
                    'error': f'Didn\'t supplied {necessary_val}',
                    'return_code': 400}
    return {'status': SUCCESS}


track_api_to_bucket = {
    'pending': 'Paid',
    'InfoReceived': 'Paid',
    'transit': 'Transit',
    'pickup': 'PickUp',
    'delivered': 'Arrived'
}


def update_cards_if_needed(not_updated_cards):
    print('\n\nmultithreading update_cards_if_needed')

    # multithreading tracking more api calls
    with concurrent.futures.ThreadPoolExecutor() as executor:
        serial_codes = [card['order_serial_code'] for card in not_updated_cards]
        curr_buckets = executor.map(getDeliveryStatus, serial_codes)
        print(f'curr_buckets = {curr_buckets}')

    # update all non updated cards for updating the LastUpdated Column
    curr_time = time.strftime('%Y-%m-%d %H:%M:%S')
    for i, curr_bucket in enumerate(curr_buckets):
        orig_bucket = not_updated_cards[i]['timeline_position']
        data = {
                'card_id': not_updated_cards[i]['card_id'], 
                'old_order_name': not_updated_cards[i]['order_name'],
                'last_updated': curr_time
            }
        
        # update timeline_position if it was changed
        if curr_bucket in track_api_to_bucket and track_api_to_bucket[curr_bucket] != orig_bucket:
            data['timeline_position'] = track_api_to_bucket[curr_bucket]
            print(f"\n\ncard {data['card_id']} timeline position was changed from \
                    {orig_bucket} to {track_api_to_bucket[curr_bucket]}")
            
        db.update_card(data)


@app.route('/api/getCards', methods=['POST'])
@cross_origin()
def retrieve_cards():
    print(f'\n\ngetCards\nrequest.data = {request.data}', flush=True)
    data_dict = json_bytes_to_dict(request.data)

    check_necessary_values_ret = check_necessary_values(data_dict, necessary_values=['token_id'])
    if check_necessary_values_ret['status'] == ERR:
        return create_err(check_necessary_values_ret)

    authenticate_user_ret = authenticate_user(data_dict)
    if authenticate_user_ret['status'] == ERR:
        return create_err(authenticate_user_ret)
    user_id = authenticate_user_ret['user_info']['sub']

    not_updated_cards = db.get_not_updated_cards(user_id)
    if not_updated_cards:
        update_cards_if_needed(not_updated_cards)

    cards, rc = db.get_cards(user_id)
    print(f'\n\ncards = {cards}', flush=True)
    return get_response(cards, rc)


@app.route('/api/addCard', methods=['POST'])
@cross_origin()
def add_card():
    print(f'\n\naddCard\nrequest.data = {request.data}', flush=True)
    data_dict = json_bytes_to_dict(request.data)

    necessary_values = ['token_id', 'order_name', 'card_id']
    check_necessary_values_ret = check_necessary_values(data_dict, necessary_values)
    if check_necessary_values_ret['status'] == ERR:
        return create_err(check_necessary_values_ret)

    authenticate_user_ret = authenticate_user(data_dict)
    if authenticate_user_ret['status'] == ERR:
        return create_err(authenticate_user_ret)

    if 'order_serial_code' in data_dict and data_dict['order_serial_code'] != '':
        curr_bucket = getDeliveryStatus(data_dict['order_serial_code'])
        bucket = data_dict['timeline_position'] if 'timeline_position' in data_dict else None
        if curr_bucket in track_api_to_bucket and track_api_to_bucket[curr_bucket] != bucket:
            data_dict['timeline_position'] = track_api_to_bucket[curr_bucket]

    res, rc = db.add_card(data_dict, authenticate_user_ret['user_info'])
    return get_response(res, rc)


def update_timeline_position_if_needed(data_dict_for_updating):
    curr_bucket, curr_order_serial_code = db.get_curr_bucket_and_order_serial_code(data_dict_for_updating)
    
    if 'order_serial_code' in data_dict_for_updating and curr_order_serial_code != data_dict_for_updating['order_serial_code']:
        realtime_bucket = getDeliveryStatus(data_dict_for_updating['order_serial_code'])

        if realtime_bucket in track_api_to_bucket and track_api_to_bucket[realtime_bucket] != curr_bucket:
            return realtime_bucket
    
    return curr_bucket


@app.route('/api/updateCard', methods=['POST'])
@cross_origin()
def update_card():
    print(f'\n\nupdate_card\nrequest.data = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)

    necessary_values = ['token_id', 'order_name', 'old_order_name', 'card_id']
    check_necessary_values_ret = check_necessary_values(data_dict, necessary_values)
    if check_necessary_values_ret['status'] == ERR:
        return create_err(check_necessary_values_ret)

    authenticate_user_ret = authenticate_user(data_dict)
    if authenticate_user_ret['status'] == ERR:
        return create_err(authenticate_user_ret)

    data_dict['user_id'] = authenticate_user_ret['user_info']['sub']
    data_dict['timeline_position'] = update_timeline_position_if_needed(data_dict)    
    res, rc = db.update_card(data_dict)

    resp = get_response(res, rc)
    resp.headers["Accept-Post"] = "*/*"
    resp.headers["Accept"] = "*/*"

    return resp


@app.route('/api/deleteCard', methods=['POST'])
@cross_origin()
def delete_card():
    print('\n\ndeleteCard\ndata = {request.data}', flush=True)
    data_dict = json_bytes_to_dict(request.data)

    necessary_values = ['token_id', 'order_name', 'card_id']
    check_necessary_values_ret = check_necessary_values(data_dict, necessary_values)
    if check_necessary_values_ret['status'] == ERR:
        return create_err(check_necessary_values_ret)

    authenticate_user_ret = authenticate_user(data_dict)
    if authenticate_user_ret['status'] == ERR:
        return create_err(authenticate_user_ret)

    res, rc = db.delete_card(data_dict['card_id'], data_dict['order_name'])
    return get_response(res, rc)
