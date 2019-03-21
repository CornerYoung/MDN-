// 导入koa，在koa2中，导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

// 注意require('koa-router')返回的是函数,引入之后要调用一下
const router = require('koa-router')();

// 创建一个Koa对象表示 web app本身
const app = new Koa();


app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

router.get('/',async (ctx,next) => {
    // ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>Index</h1>';
    //简写方式
    ctx.type = 'text/html';
    ctx.body = '<h1>Index</h1>';
    await next();
});

router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    //ctx.response.body = `<h1>hello! ${name}</h1>`;
    //简写方式
    ctx.body = `<h1>hello! ${name}</h1>`;
    await next();
});






// 挂载路由中间件
app.use(router.routes());


// 在端口3000监听
app.listen(3000,()=>{
    console.log('Running is 3000...');
});