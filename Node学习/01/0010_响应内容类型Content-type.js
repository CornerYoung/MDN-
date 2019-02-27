var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {

    /**
     * 在服务端默认发送的数据，其实是 utf8 编码的内容
     * 但是浏览器不知道你是 utf8 编码的内容
     * 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
     * 中文操作系统默认是 gbk
     * 解决方法就是正确的告诉浏览器我给你发送的内容是什么编码的
     * 在 http 协议中，Content-Type 就是用来告知对方我给你发送的数据内容是什么类型
     */

    var url = req.url;
    var player = [{
            name: '詹姆斯',
            level: '🌟🌟🌟🌟🌟'
        },
        {
            name: '韦德',
            level: '🌟🌟🌟🌟🌟'
        },
        {
            name: '哈登',
            level: '🌟🌟🌟🌟'
        }
    ];
    console.log('url是： ' + url);

    //判断路径，前边一定要加 / ，否则会发起两次请求，第二次请求是 /favicon.ico，覆盖掉第一次请求
    if (url === '/player') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end(JSON.stringify(player));
    } else if (url === '/html') {
        // 如果你发送的是 html 格式的字符串，则也要告诉浏览器我给你发送是 text/html 格式的内容
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end('<h1>大家好</h1>');
    } else {
        res.end('<h1>no Content-Type</h1>')
    };

});

server.listen(5000, function () {
    console.log('Server is linking···,port------->5000');
});