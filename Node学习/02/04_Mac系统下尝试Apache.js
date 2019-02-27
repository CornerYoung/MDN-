var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {
    var url = req.url;
    fs.readFile('/Users/yangguoning/ygn-study/jquery/img/otter1.jpg', function (error, data) {
        if (error) {
            return res.end('404 Not Found!');
        };
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);
    })
    console.log('路径: ' + url);
});

server.listen(3002, function () {
    console.log('Server is running!');
});