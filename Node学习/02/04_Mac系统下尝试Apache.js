var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {
    var url = req.url;
    var wwwDir = '/Users/yangguoning/ygn-study/jquery';
    var filePath = '/html/jq_animate.html';

    if (url !== '/') {
        filePath = url;
    }
    fs.readFile(wwwDir + filePath, function (error, data) {
        if (error) {
            return res.end('404 Not Found!');
        };
        res.end(data);
    })
    console.log('客户端的请求路径是: ' + url);
});

server.listen(3002, function () {
    console.log('Server is running!');
});