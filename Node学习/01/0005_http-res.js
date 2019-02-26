var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    //request 请求事件处理函数需要接收两个参数 
    /**
     * 1.Request 请求对象
     *      请求对象可以用来获取客户端的一些请求信息，比如请求路径
     * 2.Response 响应对象
     *      响应对象可以用来给客户端发送响应消息
     */
    console.log('收到客户端请求，请求路径是： ' + request.url);

    //response 对象有一个方法： write 可以用来给客户端发送响应数据
    //write 方法可以使用多次，但最后必须使用 end 方法进行结束，否则客户端会一直等待
    response.write('hello NodeJs!');
    response.write('你好 NodeJs!');

    //告诉客户端，我的话说完了，你可以传递给用户了
    response.end();
});

server.listen(3001, function () {
    console.log('服务器启动成功了！可以通过http://127.0.0.1:3001进行访问！');
});