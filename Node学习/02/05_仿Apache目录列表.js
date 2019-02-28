var http = require('http');
var fs = require('fs');
var server = http.createServer();
var wwwDir = '/Users/yangguoning/ygn-study/jquery';

server.on('request', function (req, res) {
    var url = req.url;

    fs.readFile('./template.html', function (error, data) {
        if (error) {
            return res.end('404 Not Found!');
        };

        //fs模块读取文件夹的方法
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not wwwDir!');
            };
            var content = '';
            files.forEach(function (item) {
                //使用es6语法拼接字符串，${}用来引用变量
                content += `
                    <tr>
                        <td data-value="apple/"><a class="icon dir" href="/Users/yangguoning/ygn-study/jquery/${item}">${item}/</a></td>
                        <td class="detailsColumn" data-value="0"></td>
                        <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                    </tr>
                `
            });

            //将二进制data数据进行字符串化处理
            data = data.toString();
            //把模版中的 @_@ 用拼接好的 content 替代
            data = data.replace('@_@', content);
            res.end(data)
        });

    });

});

server.listen(3000, function () {
    console.log('running!')
});