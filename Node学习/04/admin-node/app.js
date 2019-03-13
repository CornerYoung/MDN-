/**
 * app.js 入门模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */

var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');

var app = express();

app.engine('html', require('express-art-template'));
//配置模版引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
app.use('/node_modules', express.static('./node_modules'));
app.use('/public', express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//把路由容器挂载到 app 服务中去
app.use(router);
//router(app);

app.listen(3000, function () {
    console.log('Running... 3000')
});
