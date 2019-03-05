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

//底层 server.listen
app.listen(3000,function(){
    console.log('app is running port:3000');
});