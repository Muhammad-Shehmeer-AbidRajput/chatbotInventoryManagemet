from flask import Flask
app = Flask(__name__)

@app.route("/api/index")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/api/welcome')
def welcome():
    return "<h1>Welcome to this page</h1>"