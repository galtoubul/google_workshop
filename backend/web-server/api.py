from flask import Flask
import time

app = Flask(__name__, static_folder="../../trackeet-react-app/build", static_url_path="/")
REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID = '233763386465-f2u4jd95rvm249jcko3p8o6g1dllmev3.apps.googleusercontent.com'
REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_SECRET = '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'

@app.route('/api/time')
def hello_world():
    return {'time': time.time()}


@app.route('/api/client_id')
def get_client_id():
    return {'client_id': REACT_APP_TRACKEET_GOOGLE_AUTH_CLIENT_ID}