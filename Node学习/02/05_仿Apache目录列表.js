var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {
    var url = req.url;

    if (url === '/') {
        fs.readFile('./template.html', function (error, data) {
            if (error) {
                return res.end('404 Not Found!');
            };
            res.end(data)
        });
    };

});

server.listen(3000, function () {
    console.log('running!')
});