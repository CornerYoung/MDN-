var http = require('http');
var fs = require('fs');
var template = require('art-template');

var contents = [{
    name: '詹姆斯',
    message: 'I\'m GOAT!',
    dateTime: '2019-03-01'
}, {
    name: '韦德',
    message: '我和勒布朗是好兄弟！',
    dateTime: '2019-03-01'
}, {
    name: '科比',
    message: '黑曼巴，湖人总冠军！',
    dateTime: '2019-03-01'
}, {
    name: '朗佐·鲍尔',
    message: '和勒布朗一起打球，我很开心，我学到了很多···',
    dateTime: '2019-03-01'
}, {
    name: '英格拉姆',
    message: '努力💪💪💪💪',
    dateTime: '2019-03-01'
}];

http
    .createServer(function (req, res) {
        var url = req.url;
        if (url === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end(err);
                };

                var htmlStr = template.render(data.toString(), {
                    contents: contents
                });

                res.end(htmlStr);
            });
        } else if (url.indexOf('/post') === 0) {
            fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found!');
                };
                res.end(data);
            });
        } else if (url.indexOf('/public/') === 0) {
            //在 index.html 页面中需要访问很多外链资源，如果不设置 url 将造成页面阻塞
            //所以把需要访问的静态资源都统一放到 public 文件夹中，当访问的 url 以 /public/ 开头时，就能访问到这些静态资源了
            //public 整个目录中的资源都允许被访问
            //哪些资源能被用户访问，哪些不能被访问，可以通过代码来灵活控制
            /**
             *  /public/css/main.css
             *  /public/img/img5.jpg
             *  /public/js/main.js
             *  /public/lib/
             */
            fs.readFile('.' + url, function (err, data) {
                if (err) {
                    return res.end('404 Not Found!');
                };
                res.end(data);
            });
        } else {
            //其他 url 设置成 404
            fs.readFile('./views/404.html', function (err, data) {
                res.end(data);
            });
        };
    })
    .listen(3000, function () {
        console.log('running...');
    })