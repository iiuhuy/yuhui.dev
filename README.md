# My Person Website

## Front End 

use 

- React

## Back End 

use Python 

- Python Flask

需要创建一个 Server 目录， 并且使用 Python virtual 环境进行开发。

`server.py` 文件可以是这样：

```py
from flask import Flask, render_template

app = Flask(__name__, static_folder="../static/dist",
            template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello World !!"

if __name__ == "__main__":
    app.run()
```

```bash
$ python server.py
```

## Usage

```bash
$ git clone git@github.com:AlvinMi/yuhui.dev.git
$ cd yuhui.dev
```
