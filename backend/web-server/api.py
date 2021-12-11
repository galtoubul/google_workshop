from flask import Flask, request, jsonify
import time
import sys
import os
sys.path.append(os.path.abspath('../db'))
import db_manipulate as db

# TODO hide these in .env.local
REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID = '233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com'
REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_SECRET = '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'

app = Flask(__name__, static_folder="../../trackeet-react-app/build", static_url_path="/")


@app.route('/api/time')
def hello_world():
    return {'time': time.time()}


@app.route('/api/client_id')
def get_client_id():
    return {'clientId': REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID}


@app.route('/api/getCards', methods=['GET'])
def retrieve_cards():
    user_id = request.args.get('user_id')
    cards = db.get_cards(user_id)
    return jsonify({"cards": cards})


@app.route('/api/addCard', methods=['POST'])
def add_card():
    res = db.add_card(request.form)
    return jsonify({"response": res})

@app.route('/api/updateCard', methods=['POST'])
def update_card():
    user_id = request.args.get('user_id')
    compamy_name = request.args.get('company')
    order_number = request.args.get('order_serial_code')
    res = db.update_card(user_id, compamy_name, order_number, request.form)
    return jsonify({"response": res})
