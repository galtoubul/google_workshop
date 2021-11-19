from flask import Flask
import time

app = Flask(__name__)

@app.route('/time')
def hello_world():
    return {'time': time.time()}