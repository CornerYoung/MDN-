//使用 Node 可以轻松构建一个 Web 服务器
//在 Node 中提供了一个核心模块 http，可以用来创建编写服务器

//1.加载 http 核心模块
var http = require('http');

//2.http.creatServer()方法创建一个Web服务器，返回了一个Server实例，赋值给了变量 server
var server = http.createServer();

//3.服务器的任务
//  提供服务：数据的服务
//  发请求
//  接收请求
//  处理请求
//  发送响应

// 注册 request 请求事件，
// 当客户端发来请求，就会自动触发服务器的request请求事件，然后执行第二个参数（回调函数）
server.on('request', function () {
    console.log('收到客户端的请求了！');
});

//4.绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动成功了！可以通过http://127.0.0.1:3000进行访问！');
});