from flask import Flask
from flask import jsonify
from flask import request
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
    return item


@app.route("/items", methods=['GET'])
def get_items():
    response = jsonify(ms1.get_stuff())
    return response


@app.route("/items/<id>", methods=['GET'])
def get_item(id):
    response = jsonify(ms1.get_item(id))
    return response


@app.route("/items/<id>", methods=['DELETE'])
def delete_item(id):
    ms1.delete_item(id)


app.run()

