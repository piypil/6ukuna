
Функция `escape` преобразует символы `&, >, <, ", '` в строке в определенные безопасные HTML-сущности. [OG](https://docs.python.org/3/library/html.html#html.escape) 

1. `&` (амперсанд) - в `&amp;`
2. `<` (знак "меньше" или открывающая угловая скобка) - в `&lt;`
3. `>` (знак "больше" или закрывающая угловая скобка) - в `&gt;`
4. `"` (двойная кавычка) - в `&quot;`
5. `'` (одинарная кавычка) - в `&#39;` (или `&apos;`, в зависимости от контекста)

```Python
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

```

#CWE-79
#CWE-116
