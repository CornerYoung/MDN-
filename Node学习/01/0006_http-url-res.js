var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    var url = request.url;

    console.log('收到客户端请求，请求路径是： ' + url);

    // if (url == '/favicon.ico'){
    //     response.write('hello NodeJs!');
    //     response.end();
    // }else if(url == '/login'){
    //     response.write('login NodeJs!');
    //     response.end();
    // }else{
    //     response.write('你好吗？How are you?');
    //     response.end();
    // };

    if(url === '/products'){
        var products = [
            {'苹果 X':11800},
            { '菠萝 X': 1800},
            {'Vivo':2000}
        ];
    };

    //throw new TypeError('First argument must be a string or Buffer');
    //必须传入 字符串类型 或者 二进制
    response.end(JSON.stringify(products));

});

server.listen(3000, function () {
    console.log('服务器启动成功了！可以通过http://127.0.0.1:3000进行访问！');
});