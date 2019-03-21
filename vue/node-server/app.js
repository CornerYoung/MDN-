const http = require('http');

//引入 url 模块用于解析客户端的请求
const urlModule = require('url');

const server = http.createServer();

server.on('request', function (req, res) {
    //解构赋值，得到请求路径和请求参数
    const {
        pathname,
        query
    } = urlModule.parse(req.url, true);

    //定义一组数据，使用 jsonp 的方法传递过去
    var person = {
        name: 'Jack',
        age: 18,
        gener: '男'
    };

    if (pathname == '/getscript') {
        //var scriptStr = 'show()'; 这里是写死的调用方法，如果前端修改了函数名，将调用不到
        //var scriptStr = query.callback+'()'; 这里使用了字符串拼接，query.callback是字符串类型，后面加上'()'传入将被调用
        
        //使用模版字符串，更加简便
        // var scriptStr = `${query.callback}()`;
        
        //将 data 数据传递给前端页面
        data = JSON.stringify(person);
        //`${query.callback}(${data})` 这里坑比较多，模版字符串调用，解析
        var scriptStr = `${query.callback}(${data})`;
        //res.end 发送给客户端，客户端去把这个字符串当作 JS 代码去解析执行
        res.end(scriptStr);
    } else {
        res.end('404')
    };
});

server.listen(3000, function () {
    console.log('3000 Running...')
});