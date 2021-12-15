import json
from flask import Flask, request, jsonify, Response
import time
import sys
import os

from flask.helpers import make_response
sys.path.append(os.path.abspath('../db'))
import db_manipulate as db

# TODO hide these in .env.local
REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID = '233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com'
REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_SECRET = '***REMOVED***'

app = Flask(__name__, static_folder="../../trackeet-react-app/build", static_url_path="/")


# we started all routes with /api/ to make a seperate domain for the api

@app.route('/api/time')
def hello_world():
    return {'time': time.time()}


@app.route('/api/client_id')
def get_client_id():
    return {'clientId': REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID}


def get_response(data):
    response = make_response(jsonify(data))
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers["Content-Type"] = "application/json"
    return response


@app.route('/api/getCards', methods=['GET'])
def retrieve_cards():
    user_id = request.args.get('user_id')
    bucket = None if 'timeline_position' not in request.args else request.args.get('timeline_position')
    cards = db.get_cards(user_id, bucket)
    return get_response(cards)


@app.route('/api/addCard', methods=['POST'])
def add_card():
    res = db.add_card(request.form)
    return get_response(res)


@app.route('/api/updateCard', methods=['POST'])
def update_card():
    user_id = request.args.get('user_id')
    compamy_name = request.args.get('company')
    order_number = request.args.get('order_serial_code')
    res = db.update_card(user_id, compamy_name, order_number, request.form)
    return get_response(res)


@app.route('/api/deleteCard', methods=['POST'])
def delete_card():
    user_id = request.args.get('user_id')
    compamy_name = request.args.get('company')
    order_number = request.args.get('order_serial_code')
    res = db.delete_card(user_id, compamy_name, order_number)
    return get_response(res)
