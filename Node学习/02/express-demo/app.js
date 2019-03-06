//引入 express
var express = require('express');

var template = require('art-template');
var fs = require('fs');
var contents = [];

//补零函数
function addZro(num) {
    return num = num > 10 ? num : '0' + num;
}
//格式化时间
function getTime() {
    var dt = new Date();
    var year = addZro(dt.getFullYear());
    var month = addZro(dt.getMonth() + 1);
    var day = addZro(dt.getDate());
    var hh = addZro(dt.getHours());
    var mm = addZro(dt.getMinutes());
    var ss = addZro(dt.getSeconds());
    return year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + ss;
};
//创建服务器应用程序（底层 http.creatServer）
var app = express();

//公开指定目录，就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use('/public/', express.static('./public/'));
app.use('/node_modules/', express.static('./node_modules/'));

//当服务器收到 get 请求 / 的时候，执行回调函数
//可以通过路径一个个的判断，使代码变得更加简洁
app.get('/', function (req, res) {
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            return res.send(err)
        };
        //express 中有更好的方式
        var html = template.render(data.toString(), {
            contents: contents
        });
        res.send(html);
    });
});

app.get('/post', function (req, res) {
    fs.readFile('./post.html', function (err, data) {
        if (err) {
            return res.send(err);
        };
        res.end(data);
    });
});

app.get('/comment', function (req, res) {
    contents.unshift({
        name: req.query.name,
        message: req.query.message,
        dataTime: getTime()
    })
    res.statusCode = 302;
    res.setHeader('location', '/');
    res.end();
});

app.get('/login', function (req, res) {
    res.send(`
        < !DOCTYPE html >
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>art-template模版引擎</title>
            </head>
                <body>
                    <p>大家好！我叫{{ name }}</p>
                    <p>我今年{{ age }}岁</p>
                    <p>我喜欢的球星是{{ player }}！</p>
                </body>
                <script>
                    alert('html');
                </script>
        </html>
    `);
});

//底层 server.listen
app.listen(3000, function () {
    console.log('app is running port:3000');
});