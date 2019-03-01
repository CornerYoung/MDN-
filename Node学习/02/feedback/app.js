var http = require('http');
var fs = require('fs');

http
    .createServer(function (req, res) {
        var url = req.url;
        if (url === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end(err);
                };
                res.end(data);
            });
        } else if (url.indexOf('/public/') === 0) {
            //在 index.html 页面中需要访问很多外链资源，如果不设置 url 将造成页面阻塞
            //所以把需要访问的静态资源都统一放到 public 文件夹中，当访问的 url 以 /public/ 开头时，就能访问到这些静态资源了
            /**
             *  /public/css/main.css
             *  /public/img/img5.jpg
             *  /public/js/main.js
             *  /public/lib/
             */
            fs.readFile('.'+url,function(err,data){
                if(err){
                    return res.end('404 Not Found!');
                };
                res.end(data);
            });
        };
    })
    .listen(3000, function () {
        console.log('running...');
    })