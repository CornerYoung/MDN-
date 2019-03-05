//引入 express
var express = require('express');

//创建服务器应用程序（底层 http.creatServer）
var app = express();

//当服务器收到 get 请求 / 的时候，执行回调函数
app.get('/',function(req,res){
    res.send('hello world!');
});

app.get('/about',function(req,res){
    res.send('hello express!!');
});

app.get('/login',function(req,res){
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
    `
    );
});

//底层 server.listen
app.listen(3000,function(){
    console.log('app is running port:3000');
});