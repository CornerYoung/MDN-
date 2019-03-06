//引入 express
var express = require('express');

var fs = require('fs');
var contents = [];
var app = express();

app.use('/public/', express.static('./public/'));

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

//底层 server.listen
app.listen(3000, function () {
    console.log('app is running port:3000');
});