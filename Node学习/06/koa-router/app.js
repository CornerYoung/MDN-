// 导入koa，在koa2中，导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

// 注意require('koa-router')返回的是函数,引入之后要调用一下
const router = require('koa-router')();

//引入 koa-bodyparser，用于处理 post 请求,提供解析 request 的body的功能
const bodyParser = require('koa-bodyparser');

// 创建一个Koa对象表示 web app本身
const app = new Koa();
app.use(bodyParser());

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

router.get('/', async (ctx, next) => {
    // ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>Index</h1>';
    //简写方式
    ctx.type = 'text/html';
    ctx.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="Young"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
    await next();
});

router.post('/signin', async (ctx, next) => {
    //koa-bodyparser 把解析后的参数，绑定到ctx.request.body中,在 post 中赋值给 ctx.body
    //ctx.body = ctx.request.body;

    let
        user = ctx.request.body.name || '',
        password = ctx.request.body.password || '';

    if (user === 'Young' && password === '12345') {
        ctx.body = `<h1>Success...Welcome, ${user}!</h1>`;
    } else {
        ctx.body = `<h1>Failed...</h1>
        <p><a href="/">Try again</a></p>`;
    };

    next();
});

router.get('/hello/:name', async (ctx, next) => {
    //可以在请求路径中使用带变量的 / hello /: name，变量可以通过ctx.params.name访问
    var name = ctx.params.name;
    //ctx.response.body = `<h1>hello! ${name}</h1>`;
    //简写方式
    ctx.body = `<h1>hello! ${name}</h1>`;
    await next();
});






// 挂载路由中间件
app.use(router.routes());


// 在端口3000监听
app.listen(3000, () => {
    console.log('Running is 3000...');
});