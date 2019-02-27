/**
 * 1. 结合 fs 发送文件中的数据
 * 2. Content-Type
 *      http://tool.oschina.net/commons
 *      不同的资源对应的 Content-Type 是不一样的
 *      图片不需要指定编码
 *      一般只为字符数据才指定编码
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {
    var url = req.url;
    if (url === '/') {
        // 我们要发送的还是在文件中的内容
        fs.readFile('./resource/index.html', function (error, data) {
            if (error) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读取失败，请稍后重试！');
            } else {
                // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data);
            };
        });
    } else if (url === '/logo') {
        // url：统一资源定位符
        // 一个 url 最终其实是要对应到一个资源的
        fs.readFile('./resource/logo.png', function (error, data) {
            if (error) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读取失败，请稍后重试！');
            } else {
                // 图片就不需要指定编码了，因为我们常说的编码一般指的是：字符编码
                res.setHeader('Content-Type', 'image/png');
                res.end(data);
            };
        });
    };
    console.log('请求路径是： ' + url);
});

server.listen(3000, function () {
    console.log('Server is running...');
});