from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route('/greeting')
def greeting():
    user_input = request.args.get('name')
    template = 'Вот они слева направо, {{ name }}!'
    return render_template_string(template, name=user_input)

if __name__ == '__main__':
    app.run()
