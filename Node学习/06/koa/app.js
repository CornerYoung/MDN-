// 导入koa，在koa2中，导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

// 创建一个Koa对象表示 web app本身
const app = new Koa();


app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

app.use(async (ctx, next) => {
    var start = new Date().getTime();
    console.log('当前时间： ' + start);
    await next(); // 调用下一个middleware
    var ms = new Date().getTime() - start;
    console.log('耗时时间： ' + ms);
});

// 对于任何请求，app将调用该异步函数处理请求
app.use(async (ctx,next) => {
    //next是koa传入的将要处理的下一个异步函数
    //首先用await next(); 处理下一个异步函数，然后，设置response的Content - Type和内容
    //由async标记的函数称为异步函数，在异步函数中，可以用await调用另一个异步函数
    await next();
    // 设置response的Content-Type
    ctx.response.type = 'text/html';
    // 设置response的内容
    ctx.response.body = '<h1>hello koa2!!!</h1>'
});









// 在端口3000监听
app.listen(3000,()=>{
    console.log('Running is 3000...');
});