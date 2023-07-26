from flask import Flask, request, make_response
from markupsafe import escape

app = Flask(__name__)

@app.route('/unsafe')
def unsafe():
    first_name = request.args.get('name', '')
    return make_response("Твое имя: " + first_name)

@app.route('/safe')
def safe():
    first_name = request.args.get('name', '')
    return make_response("Твое имя: " + escape(first_name))

if __name__ == "__main__":
    app.run()
