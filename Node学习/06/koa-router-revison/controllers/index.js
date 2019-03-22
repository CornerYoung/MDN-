var fn_login = async (ctx, next) => {
    //登录页面 get
    //ctx.type = 'text/html';

    ctx.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="Young"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;

    next();
};

var fn_signin = async (ctx, next) => {
    //验证密码页面 post
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
};

module.exports = {
    // 'GET':fn_login,
    // 'POST':fn_signin
    'GET /': fn_login,
    'POST /signin': fn_signin
};