import sys
import os
import ast
from flask import Flask, request, jsonify
from flask.helpers import make_response
from flask_cors import CORS, cross_origin
from google.oauth2 import id_token
from google.auth.transport import requests
sys.path.append(os.path.abspath('../db'))
import db_manipulate as db


# TODO hide these in .env.local
REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID = '233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com'
REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_SECRET = '***REMOVED***'

# app = Flask(__name__, static_folder="../../trackeet-react-app/build", static_url_path="/")
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def get_user_id(token_id):
    print('\n\nget_user_id\n')
    print('token_id = ', token_id)
    try:
        idinfo = id_token.verify_oauth2_token(token_id, requests.Request(), REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID)

        # ID token is valid. Get the user's Google Account ID from the decoded token.
        user_id = idinfo['sub']
        return user_id
    except ValueError as err:
        print('\ninvalid token: {err}')
        pass


@app.after_request
def after_request(response):
    print('\n\nafter_request\n')
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


def get_response(data, code=200):
    response = make_response(jsonify(data), code)
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers["Content-Type"] = "application/json"
    return response


def json_bytes_to_dict(json_bytes):
    string_dict = (json_bytes.decode()).strip("'")
    dict = ast.literal_eval(string_dict)
    return dict


@app.route('/api/getCards', methods=['POST'])
@cross_origin()
def retrieve_cards():
    print('\n\ngetCards\n')
    print('request.headers = ', request.headers)
    print('request.data = ', request.data)

    data_dict = json_bytes_to_dict(request.data)
    print('data_dict = ', data_dict)

    if 'token_id' not in data_dict:
        return get_response({'response':'Didn\'t supplied token id'}, 400)

    user_id = get_user_id(data_dict['token_id'])
    print('user_id = ', user_id)

    bucket = None if 'timeline_position' not in request.args else request.args.get('timeline_position')
    print('bucket = ', bucket)

    cards = db.get_cards(user_id, bucket)
    return get_response(cards)


@app.route('/api/addCard', methods=['POST'])
@cross_origin()
def add_card():
    print('\n\naddCard\n')
    print('request.data = ', request.data)

    data_dict = json_bytes_to_dict(request.data)
    print('data_dict = ', data_dict)

    for necessary_val in ['token_id', 'company', 'order_serial_code']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    user_id = get_user_id(data_dict['token_id'])
    print('user_id = ', user_id)

    res = db.add_card(data_dict, user_id)
    return get_response(res)


@app.route('/api/updateCard', methods=['POST'])
@cross_origin()
def update_card():
    print('\n\nupdate_card\n')
    print('request.data = ', request.data)

    data_dict = json_bytes_to_dict(request.data)
    print('data_dict = ', data_dict)

    for necessary_val in ['token_id', 'company', 'order_serial_code']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    user_id = get_user_id(data_dict['token_id'])
    compamy_name = request.args.get('company')
    order_number = request.args.get('order_serial_code')

    print('user_id = ', user_id)
    print('compamy_name = ', compamy_name)
    print('order_number = ', order_number)

    res = db.update_card(user_id, compamy_name, order_number, data_dict)

    resp = get_response(res)
    resp.headers["Accept-Post"] = "*/*"
    resp.headers["Accept"] = "*/*"

    return resp


@app.route('/api/deleteCard', methods=['POST'])
def delete_card():
    print('\n\ndeleteCard\n')
    print('request.data = ', request.data)

    data_dict = json_bytes_to_dict(request.data)
    print('data_dict = ', data_dict)

    for necessary_val in ['token_id', 'company', 'order_serial_code']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    user_id = get_user_id(data_dict['token_id'])
    compamy_name = request.args.get('company')
    order_number = request.args.get('order_serial_code')

    res = db.delete_card(user_id, compamy_name, order_number)
    return get_response(res)
