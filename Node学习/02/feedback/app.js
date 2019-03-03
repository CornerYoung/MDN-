var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('art-template');

var contents = [];

// http://127.0.0.1:3000/comment?name=令狐冲&message=独孤九剑、吸星大法、易筋经%0D%0A
// 表单提交的请求路径，其中具有用户动态填写的内容，所以不能通过去判断完整的 url 路径来处理这个请求
// 结论：只需要判定，如果请求路径是 /pinglun 的时候，那么就认为用户提交表单的请求过来了

http
    .createServer(function (req, res) {
        // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
        var parseObj = url.parse(req.url, true);
        // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
        var pathName = parseObj.pathname;
        //var url = req.url;
        if (pathName === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end(err);
                };

                var htmlStr = template.render(data.toString(), {
                    contents: contents
                });

                res.end(htmlStr);
            });
        } else if (pathName.indexOf('/post') === 0) {
            fs.readFile('./views/post.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found!');
                };
                res.end(data);
            });
        } else if (pathName.indexOf('/public/') === 0) {
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
            fs.readFile('.' + pathName, function (err, data) {
                if (err) {
                    return res.end('404 Not Found!');
                };
                res.end(data);
            });
        } else if (pathName === '/comment') {
            // 注意：此时无论 /pinglun? 之后是什么内容，都可以访问到这个路径，因为 pathname 是不包含 ? 之后的那个路径
            // 一次请求对应一次响应，响应结束这次请求也就结束了
            //res.end(JSON.stringify(parseObj.query));
            // 我们已经使用 url 模块的 parse 方法把请求路径中的查询字符串给解析成一个对象了
            // 所以接下来要做的就是：
            //    1. 获取表单提交的数据 parseObj.query
            //    2. 将当前时间日期添加到数据对象中，然后存储到数组中
            parseObj.query.dateTime = new Date();
            contents.push(parseObj.query);
            //    3. 让用户重定向跳转到首页 /
            //       当用户重新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了

            //进行路由重定向,302 临时重定向 （301，永久重定向）
            res.statusCode = 302;
            res.setHeader('location', '/');
            res.end();
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

    /**
     * {
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
        }
     */