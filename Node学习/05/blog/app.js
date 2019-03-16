var express = require('express');
var path = require('path');
var router = require('./routes/router');
var bodyParser = require('body-parser');

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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//把路由挂在到 app 中
app.use(router);

app.listen(8888, function () {
    console.log('Port 8888 is Running...');
});