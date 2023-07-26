*__Stored XSS__*
*__Хранимые XSS


Функция `render_template_string` отображает модель в виде `<p>{{ comment }}</p>` в `DOM` но не сохраняет его в базу данных. Таким образом мы можем через `comment` внести зловредный код.

__В реальном приложении Flask по умолчанию уже стоит автоматическое экранирование специальных символов для предотвращения XSS. Специальные символы `&, >, <, ", '`__

Данный пример нужен для понимания

```Python Flask
from flask import Flask, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
    comment = '<script>alert("Ребят, я свой!!! Мне можно доверять доступ к системе управления ядерного арсенала страны")</script>'
    return render_template_string('<p>{{ comment }}</p>', comment=comment)

if __name__ == '__main__':
    app.run()

```

---

`In This` немного изменился алгоритм, сохраняем комментарий в базу данных (Stored XSS). Но даже при таком условии в FLask не будет выполнена атака. Flask автоматический экранирует специальные символы (упоминал выше). Чтобы все "работало" форме надо добавить блоки `->`
`{% autoescape %}` - отключение автоматического экранирования специальных символов
`{{ comment|safe }}` - safe помечает в шаблоне `comment` как безопасную конструкцию и не экранирует специальные символы.

```Python Flask
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        comment_text = request.form['comment']
        comment = Comment(content=comment_text)
        db.session.add(comment)
        db.session.commit()
        return redirect('/')

    comments = Comment.query.all()
    comment_contents = [comment.content for comment in comments]
    return render_template('index.html', comments=comment_contents)
```

```HTML Form
<!DOCTYPE html>
<html>
<head>
    <title>Flask App - Comments</title>
</head>
<body>
    <h1>Leave a Comment</h1>
    <form method="POST" action="/">
        <textarea name="comment" rows="4" cols="50"></textarea><br><br>
        <input type="submit" value="Save">
    </form>

    <h2>Comments:</h2>
    <div id="commentArea">
        {% for comment in comments %}
            <p>{{ comment|safe }}</p>
        {% endfor %}
    </div>
</body>
</html>
```
