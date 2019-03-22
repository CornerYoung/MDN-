// 导入koa，在koa2中，导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

// 注意require('koa-router')返回的是函数,引入之后要调用一下
//const router = require('koa-router')();

// 引入 fs 模块，用于读取文件
//const fs = require('fs');

//引入 koa-bodyparser，用于处理 post 请求,提供解析 request 的body的功能
const bodyParser = require('koa-bodyparser');

//引入 controllers 中的自定义模块
//const userFn = require('./controllers/index');
//const hello = require('./controllers/hello');
const controller = require('./controller');

// 创建一个Koa对象表示 web app本身
const app = new Koa();

app.use(bodyParser());
app.use(controller());

// router.get('/', userFn['GET /']);

// router.post('/signin', userFn['POST /signin']);

// router.get('/hello/:name', hello['GET /hello/:name']);


// 挂载路由中间件
//app.use(router.routes());


// 在端口3000监听
app.listen(3000, () => {
    console.log('Running is 3000...');
});