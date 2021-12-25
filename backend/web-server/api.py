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
sys.path.append(os.path.abspath('../'))
from config import client_id, ERR
from auto_track import getDeliveryStatus


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def get_user_info(token_id):
    print(f'\n\nget_user_info\ntoken_id = {token_id}', flush=True)
    try:
        return id_token.verify_oauth2_token(token_id, requests.Request(), client_id)
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
    string_dict = (json_bytes.decode()).strip("'")
    dict = ast.literal_eval(string_dict)
    return dict


track_api_to_bucket = {
    'pending': 'Paid',
    'transit': 'Transit',
    'pickup': 'PickUp',
    'delivered': 'Arrived'
}


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
                'order_name':card['order_name'] , 
                'timeline_position': curr_bucket
            }
            db.update_card(data)


@app.route('/api/getCards', methods=['POST'])
@cross_origin()
def retrieve_cards():
    print(f'\n\ngetCards\nheaders = {request.headers}\nrequest.data = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)
    print('data_dict = ', data_dict, flush=True)

    if 'token_id' not in data_dict:
        return get_response({'response':f'Didn\'t supplied token_id'}, 400)

    user_info = get_user_info(data_dict['token_id'])
    if user_info == ERR:
        return get_response({'response':'Couldn\'t authenticate user via Google'}, 403)
    user_id = user_info['sub']
    print(f'user_id = {user_id}', flush=True)

    not_updated_cards_serial_codes = db.get_not_updated_cards_serial_codes(user_id)
    update_cards_if_needed(not_updated_cards_serial_codes)

    bucket = None if 'timeline_position' not in request.args else request.args.get('timeline_position')
    print(f'bucket = {bucket}', flush=True)

    cards = db.get_cards(user_id, bucket)
    
    print(f'cards = {cards}', flush=True)
    return get_response(cards)


@app.route('/api/addCard', methods=['POST'])
@cross_origin()
def add_card():
    print(f'\n\naddCard\nrequest.data = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)
    print(f'data_dict = {data_dict}', flush=True)

    for necessary_val in ['token_id', 'order_name', 'card_id']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    user_info = get_user_info(data_dict['token_id'])
    if user_info == ERR:
        return get_response({'response':'Couldn\'t authenticate user via Google'}, 403)

    print(f'user_info = {user_info}', flush=True)

    res = db.add_card(data_dict, user_info)
    return get_response(res)


@app.route('/api/updateCard', methods=['POST'])
@cross_origin()
def update_card():
    print(f'\n\nupdate_card\nrequest.data = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)
    print(f'data_dict = {data_dict}', flush=True)

    for necessary_val in ['token_id', 'card_id', 'order_name']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    user_info = get_user_info(data_dict['token_id'])
    if user_info == ERR:
        return get_response({'response':'Couldn\'t authenticate user via Google'}, 403)
    user_id = user_info['sub']
    data_dict['user_id'] = user_id

    res = db.update_card(data_dict)

    resp = get_response(res)
    resp.headers["Accept-Post"] = "*/*"
    resp.headers["Accept"] = "*/*"

    return resp


@app.route('/api/deleteCard', methods=['POST'])
def delete_card():
    print('\n\ndeleteCard\ndata = {request.data}', flush=True)

    data_dict = json_bytes_to_dict(request.data)
    print('data_dict = ', data_dict, flush=True)

    for necessary_val in ['token_id', 'card_id', 'order_name']:
        if necessary_val not in data_dict:
            return get_response({'response':f'Didn\'t supplied {necessary_val}'}, 400)

    user_info = get_user_info(data_dict['token_id'])
    if user_info == ERR:
        return get_response({'response':'Couldn\'t authenticate user via Google'}, 403)

    res = db.delete_card(data_dict['card_id'], data_dict['order_name'])
    return get_response(res)
