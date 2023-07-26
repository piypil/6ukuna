*__XSS - Cross-Site Scripting__*
*__Межсайтовый скриптинг__*

В основе XSS атаки лежит внедрение произвольного JavaScript кода в веб приложение, которое на стороне клиента (браузер пользователя) выполняет зловредные действия.

Основные методы вызова JavaScript из HTML:
```JavaScript
<script>...</script>
<img onerror = "..." src = 'x'>TEST</a>
<a href="javascript:...">Хочешь денег? Много денег?</a>
<iframe src="javascript:...">
```

XSS атаки классифицируются по 3 основным признакам:
- Хранимые (Stored) XSS (код перед выполнением храниться в базе данных)
- Отраженные (Reflected) XSS (код не храниться в базе данных, а отражается от сервера)
- DOM-Based XSS (код одновременно храниться и выполняется в браузере)

Что может злоумышленник `->`
1. Злоумышленник может попытаться получить креды ("credentials") пользователя и войти в его аккаунт.
2. Злоумышленник может перенаправить пользователя на поддельную страницу и украсть cookies.
3. Многое другое

Как можно внедрить код ? Код можно внедрить через поля ввода `->` форма ввода комментария, форма логина и пароля, форма заполнения информации о твоей бывшей (или …). `(o-_-o)` Если данные сохраняются в базу данных то `->` При генерации `HTML` страницы сохраненные данные из базы данных передаются в шаблон. Если отключены механизмы защиты от XSS, то сохраненный код в базе данных при вызове будет выполнен. `Stored XSS`


<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="531px" viewBox="-0.5 -0.5 531 631" content="&lt;mxfile&gt;&lt;diagram id=&quot;R68SOKEH2wR5LUJzxgqq&quot; name=&quot;Страница 1&quot;&gt;&lt;mxGraphModel dx=&quot;537&quot; dy=&quot;582&quot; grid=&quot;1&quot; gridSize=&quot;10&quot; guides=&quot;1&quot; tooltips=&quot;1&quot; connect=&quot;1&quot; arrows=&quot;1&quot; fold=&quot;1&quot; page=&quot;1&quot; pageScale=&quot;1&quot; pageWidth=&quot;827&quot; pageHeight=&quot;1169&quot; math=&quot;0&quot; shadow=&quot;0&quot;&gt;&lt;root&gt;&lt;mxCell id=&quot;0&quot;/&gt;&lt;mxCell id=&quot;1&quot; parent=&quot;0&quot;/&gt;&lt;mxCell id=&quot;2&quot; value=&quot;&quot; style=&quot;rounded=0;whiteSpace=wrap;fillColor=#1ba1e2;fontColor=#ffffff;strokeColor=#006EAF;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;354&quot; y=&quot;90&quot; width=&quot;236&quot; height=&quot;60&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;3&quot; value=&quot;API получает инфомацю из формы &quot; style=&quot;rounded=0;whiteSpace=wrap;fillColor=#1ba1e2;fontColor=#ffffff;strokeColor=#006EAF;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;354&quot; y=&quot;190&quot; width=&quot;236&quot; height=&quot;60&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;4&quot; value=&quot;API обрабатывает запрос&quot; style=&quot;rounded=0;whiteSpace=wrap;fillColor=#1ba1e2;fontColor=#ffffff;strokeColor=#006EAF;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;354&quot; y=&quot;450&quot; width=&quot;236&quot; height=&quot;60&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;5&quot; value=&quot;Информация внедряеться в DOM&quot; style=&quot;rounded=0;whiteSpace=wrap;fillColor=#1ba1e2;fontColor=#ffffff;strokeColor=#006EAF;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;354&quot; y=&quot;555&quot; width=&quot;236&quot; height=&quot;60&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;6&quot; value=&quot;Выполнение&quot; style=&quot;rounded=0;whiteSpace=wrap;fillColor=#1ba1e2;fontColor=#ffffff;strokeColor=#006EAF;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;354&quot; y=&quot;660&quot; width=&quot;236&quot; height=&quot;60&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;7&quot; value=&quot;Запрос пользователя &quot; style=&quot;rounded=0;whiteSpace=wrap;fillColor=#1ba1e2;fontColor=#ffffff;strokeColor=#006EAF;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;60&quot; y=&quot;450&quot; width=&quot;236&quot; height=&quot;60&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;9&quot; value=&quot;&amp;#10;Информация записывается в &amp;#10;Базу данных&quot; style=&quot;strokeWidth=2;shape=mxgraph.flowchart.database;whiteSpace=wrap;fillColor=#1ba1e2;fontColor=#ffffff;strokeColor=#006EAF;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;363&quot; y=&quot;320&quot; width=&quot;218&quot; height=&quot;60&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;11&quot; value=&quot;&quot; style=&quot;endArrow=classic;endSize=8;startSize=8;jumpSize=7;strokeWidth=2;&quot; parent=&quot;1&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&lt;mxPoint x=&quot;471.64&quot; y=&quot;150&quot; as=&quot;sourcePoint&quot;/&gt;&lt;mxPoint x=&quot;472&quot; y=&quot;190&quot; as=&quot;targetPoint&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;12&quot; value=&quot;&quot; style=&quot;endArrow=classic;endSize=8;startSize=8;jumpSize=7;strokeWidth=2;entryX=0.5;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;&quot; parent=&quot;1&quot; target=&quot;9&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&lt;mxPoint x=&quot;471.64&quot; y=&quot;250&quot; as=&quot;sourcePoint&quot;/&gt;&lt;mxPoint x=&quot;472.0000000000001&quot; y=&quot;290&quot; as=&quot;targetPoint&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;13&quot; value=&quot;&quot; style=&quot;endArrow=classic;endSize=8;startSize=8;jumpSize=7;strokeWidth=2;entryX=0.5;entryY=0;entryDx=0;entryDy=0;&quot; parent=&quot;1&quot; target=&quot;4&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&lt;mxPoint x=&quot;471.64&quot; y=&quot;380&quot; as=&quot;sourcePoint&quot;/&gt;&lt;mxPoint x=&quot;472.0000000000001&quot; y=&quot;420&quot; as=&quot;targetPoint&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;14&quot; value=&quot;&quot; style=&quot;endArrow=classic;endSize=8;startSize=8;jumpSize=7;strokeWidth=2;entryX=0;entryY=0.5;entryDx=0;entryDy=0;&quot; parent=&quot;1&quot; target=&quot;4&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&lt;mxPoint x=&quot;300&quot; y=&quot;480&quot; as=&quot;sourcePoint&quot;/&gt;&lt;mxPoint x=&quot;310.3600000000001&quot; y=&quot;500&quot; as=&quot;targetPoint&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;15&quot; value=&quot;&quot; style=&quot;endArrow=classic;endSize=8;startSize=8;jumpSize=7;strokeWidth=2;entryX=0.5;entryY=0;entryDx=0;entryDy=0;&quot; parent=&quot;1&quot; target=&quot;5&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&lt;mxPoint x=&quot;471.64&quot; y=&quot;510&quot; as=&quot;sourcePoint&quot;/&gt;&lt;mxPoint x=&quot;472.0000000000001&quot; y=&quot;550&quot; as=&quot;targetPoint&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;16&quot; value=&quot;&quot; style=&quot;endArrow=classic;endSize=8;startSize=8;jumpSize=7;strokeWidth=2;entryX=0.5;entryY=0;entryDx=0;entryDy=0;&quot; parent=&quot;1&quot; target=&quot;6&quot; edge=&quot;1&quot;&gt;&lt;mxGeometry width=&quot;50&quot; height=&quot;50&quot; relative=&quot;1&quot; as=&quot;geometry&quot;&gt;&lt;mxPoint x=&quot;471.64&quot; y=&quot;615&quot; as=&quot;sourcePoint&quot;/&gt;&lt;mxPoint x=&quot;472.0000000000001&quot; y=&quot;655&quot; as=&quot;targetPoint&quot;/&gt;&lt;/mxGeometry&gt;&lt;/mxCell&gt;&lt;mxCell id=&quot;18&quot; value=&quot;Форма пользователя&quot; style=&quot;text;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;&quot; parent=&quot;1&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry x=&quot;442&quot; y=&quot;105&quot; width=&quot;60&quot; height=&quot;30&quot; as=&quot;geometry&quot;/&gt;&lt;/mxCell&gt;&lt;/root&gt;&lt;/mxGraphModel&gt;&lt;/diagram&gt;&lt;/mxfile&gt;" onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&amp;&amp;src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&amp;&amp;!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&amp;&amp;evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://viewer.diagrams.net/?client=1&amp;page=0');}}})(this);" style="cursor:pointer;max-width:100%;max-height:631px;"><defs/><g><rect x="294" y="0" width="236" height="60" fill="#1ba1e2" stroke="#006eaf" pointer-events="all"/><rect x="294" y="100" width="236" height="60" fill="#1ba1e2" stroke="#006eaf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 234px; height: 1px; padding-top: 130px; margin-left: 295px;"><div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">API получает инфомацю из формы </div></div></div></foreignObject><text x="412" y="134" fill="#ffffff" font-family="Helvetica" font-size="12px" text-anchor="middle">API получает инфомацю из формы </text></switch></g><rect x="294" y="360" width="236" height="60" fill="#1ba1e2" stroke="#006eaf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 234px; height: 1px; padding-top: 390px; margin-left: 295px;"><div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">API обрабатывает запрос</div></div></div></foreignObject><text x="412" y="394" fill="#ffffff" font-family="Helvetica" font-size="12px" text-anchor="middle">API обрабатывает запрос</text></switch></g><rect x="294" y="465" width="236" height="60" fill="#1ba1e2" stroke="#006eaf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 234px; height: 1px; padding-top: 495px; margin-left: 295px;"><div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Информация внедряеться в DOM</div></div></div></foreignObject><text x="412" y="499" fill="#ffffff" font-family="Helvetica" font-size="12px" text-anchor="middle">Информация внедряеться в DOM</text></switch></g><rect x="294" y="570" width="236" height="60" fill="#1ba1e2" stroke="#006eaf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 234px; height: 1px; padding-top: 600px; margin-left: 295px;"><div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Выполнение</div></div></div></foreignObject><text x="412" y="604" fill="#ffffff" font-family="Helvetica" font-size="12px" text-anchor="middle">Выполнение</text></switch></g><rect x="0" y="360" width="236" height="60" fill="#1ba1e2" stroke="#006eaf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 234px; height: 1px; padding-top: 390px; margin-left: 1px;"><div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Запрос пользователя </div></div></div></foreignObject><text x="118" y="394" fill="#ffffff" font-family="Helvetica" font-size="12px" text-anchor="middle">Запрос пользователя </text></switch></g><path d="M 303 280 L 303 240 C 303 234.48 351.8 230 412 230 C 472.2 230 521 234.48 521 240 L 521 280 C 521 285.52 472.2 290 412 290 C 351.8 290 303 285.52 303 280 Z" fill="#1ba1e2" stroke="#006eaf" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 303 240 C 303 245.52 351.8 250 412 250 C 472.2 250 521 245.52 521 240" fill="none" stroke="#006eaf" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 216px; height: 1px; padding-top: 260px; margin-left: 304px;"><div data-drawio-colors="color: #ffffff; " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(255, 255, 255); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;"><br />Информация записывается в <br />Базу данных</div></div></div></foreignObject><text x="412" y="264" fill="#ffffff" font-family="Helvetica" font-size="12px" text-anchor="middle">Информация записывается в...</text></switch></g><path d="M 411.64 60 L 411.91 90.26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 411.98 97.76 L 406.89 87.81 L 411.91 90.26 L 416.89 87.72 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 411.64 160 L 411.95 220.26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 411.99 227.76 L 406.94 217.79 L 411.95 220.26 L 416.94 217.74 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 411.64 290 L 411.95 350.26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 411.99 357.76 L 406.94 347.79 L 411.95 350.26 L 416.94 347.74 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 240 390 L 284.26 390" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 291.76 390 L 281.76 395 L 284.26 390 L 281.76 385 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 411.64 420 L 411.92 455.26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 411.98 462.76 L 406.9 452.8 L 411.92 455.26 L 416.9 452.72 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><path d="M 411.64 525 L 411.92 560.26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 411.98 567.76 L 406.9 557.8 L 411.92 560.26 L 416.9 557.72 Z" fill="rgb(0, 0, 0)" stroke="rgb(0, 0, 0)" stroke-width="2" stroke-miterlimit="10" pointer-events="all"/><rect x="382" y="15" width="60" height="30" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" style="overflow: visible; text-align: left;"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: 30px; margin-left: 383px;"><div data-drawio-colors="color: rgb(0, 0, 0); " style="box-sizing: border-box; font-size: 0px; text-align: center;"><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; white-space: normal; overflow-wrap: normal;">Форма пользователя</div></div></div></foreignObject><text x="412" y="34" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="12px" text-anchor="middle">Форма пользователя</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>


Reflected XSS -  разработчик может брать параметры из URL или тела запроса

```PHP
<p>
Почему не работаем, <?php echo($_GET["name"]); ?>!
</p>
```

```URL
/work.php?name=<script>alert('Пусь')</script>
```

XSS внутри значения атрибута -> что тогда?

Форма ->
```URL
/work.php?name=<script>alert('Кусь')</script>
```

```PHP
<form action="work.php" method="POST">
	<input name="name" value="<script>alert('Кусь')</script>">
</form>
```

При таком примере, XSS не будет работать так как не закрыт атрибут.

Решение ->

```URL
/work.php?name=<script>alert('Кусь')</script>
```

```PHP
<form action="work.php" method="POST">
	<input name="name" value=""><script>alert('Кусь')</script>" >
</form>
```

XSS внутри ссылки -> ДЭ?

```PHP
<a href="<?php echo($_GET["returnUrl"]); ?>">Курс влететь в IT за 0 рублей </a>
```

```URL
/itkurs.php?returnUrl=javascript:alert('ЯхААА Влетел ***')
```


Примеры `->`
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


По некоторым оценкам XSS присутствует более чем в 2/3 web-приложений в интернете.
Существует несколько способов для снижения риска XSS: 
- CSP
- Проверка ввода 
- Кодирование вывода 
- Санитизация
Хорошей практикой является внедрением всех механизмов защиты.
