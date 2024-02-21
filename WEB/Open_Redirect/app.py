from bottle import run, route, request, redirect


@route('/')
def index():
    test = request.query.get('test')
    if test:
        redirect(test)
    return "Hello World"
run()
