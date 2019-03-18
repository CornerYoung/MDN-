var express = require('express');
var path = require('path');
var router = require('./routes/router');
var bodyParser = require('body-parser');
var session = require('express-session')

var app = express();

//开放资源文件夹
//app.use('/public/',express.static('./public/'));
//app.use('/node_modules/', express.static('./node_modules/')); 
//效果相同，使用 path 模块中的 join 方法进行拼接路径
//__dirname 可以用来动态获取当前文件模块所属目录的绝对路径
//__filename 可以用来动态地获取当前文件的绝对路径
//在文件操作中，使用相对路径是不可靠的，因为在 Node 中文件操作的路径被设计为相对于执行 node 命令所处的路径。（这样设计不是bug，是有使用场景的）
//所以为了解决这个问题，需要把相对路径改为绝对路径，这里就可以使用 __dirname 或者 __filename 来解决这个问题了
app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));

app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, './views/')); //默认就是 ./views 目录，再写一次是为了以后想改的话方便修改

//配置解析表单 POST 请求体插件（注意⚠️ 一定要在 app.use(router) 之前）
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//配置 express-session 插件，可以通过 req.session 来访问和设置 Session 成员
//添加 session 数据：req.session.foo = 'bar'
//访问 session 数据：req.session.foo
app.use(session({
    secret: 'keyboard cat', // 配置加密字符串，它会在原有加密基础上和这个字符串拼起来区加密，增加安全性
    resave: false,
    saveUninitialized: true //无论是否使用session，都默认分配一把钥匙
}))

//把路由挂在到 app 中
app.use(router);

//配置一个处理 404 的中间件
app.use(function (req, res, next) {
    res.render('404.html');
    next();
});

//配置一个全局错误处理中间件
app.use(function (err, req, res, next) {
    res.status(500).json({
        err_code: 500,
        message: err.message
    });
});

app.listen(8888, function () {
    console.log('Port 8888 is Running...');
});