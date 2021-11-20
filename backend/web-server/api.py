from flask import Flask
import time

app = Flask(__name__, static_folder="../../trackeet-react-app/build", static_url_path="/")

@app.route('/api/time')
def hello_world():
    return {'time': time.time()}