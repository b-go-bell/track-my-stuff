from flask import Flask
from flask import jsonify
from flask import request
import json
from ManageStuff import *

app = Flask(__name__)

ms1 = ManageStuff("localhost", 5432, "stuff", "bridgetbell", "password")
ms1.connect_db()

@app.route("/")
def hello():
    return "<h1>welcome to track my stuff</h1>"

@app.route("/items", methods=['POST'])
def post_item():
    item = json.dumps(request.get_json())
    ms1.add_item(item)
    return "<p>adding pencil</p>"

@app.route("/items", methods=['GET'])
def get_items():
    response = jsonify(ms1.get_stuff())
    return response

@app.route("/items/", methods=['GET'])
def get_item():
    # todo
    pass

app.run()

