var http = require('http');
var fs = require('fs');
var template = require('art-template');
var server = http.createServer();
var wwwDir = '/Users/yangguoning/ygn-study/jquery';

server.on('request', function (req, res) {

    fs.readFile('./template-apache.html', function (error, data) {
        if (error) {
            return res.end('404 Not Found!');
        };

        //fs模块读取文件夹
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not wwwDir!');
            };
            /**
             * var htmlStr = data.toString();
             * template.render(htmlStr,{
             *     files : files,
             *     template:'使用模版引擎解析替换HTML页面'
             * });
             * 这里有坑，对于template.render方法不熟悉,
             * 没有拿到解析替换的返回值，无法进行页面的渲染
             */

            //template.render 返回一个模版引擎渲染替换之后的页面，在 res.end 方法中接收这个返回值进行渲染
            var htmlStr = template.render(data.toString(),{
                title:'使用模版引擎解析替换HTML页面',
                files : files
            });
            res.end(htmlStr)
        });
        
    });

});

server.listen(3000, function () {
    console.log('running!')
});