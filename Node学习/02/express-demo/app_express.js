var express = require('express');
var app = express();

app.use('/public/', express.static('./public/'));
//要将node_moudle开放出来，页面将加载不到里面所需要的资源
app.use('/node_modules/', express.static('./node_modules/'))
// 配置使用 art-template 模板引擎
// 第一个参数，表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎（也可以改成任意后缀名）
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要加载 art-template 但是也必须安装，原因就在于 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/post', function (req, res) {
    res.render('post.html');
});

app.get('/comment', function (req, res) {
    res.send('comment.html');
});

// Express 为 Response 相应对象提供了一个方法：render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

// 如果想要修改默认的 views 目录，则可以
// app.set('views', render函数的默认路径)

app.get('/admin', function (req, res) {
    res.render('admin.html', {
        title: '管理系统'
    });
});

//底层 server.listen
app.listen(3000, function () {
    console.log('app is running port:3000');
});