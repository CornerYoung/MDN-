var hello = async (ctx,next) => {

    var name = ctx.params.name;
    var params = JSON.stringify(ctx.params)

    ctx.body = `<h1>hello! ${name}</h1>
    <h2>ctx.params is ${params}</h2>`;

    await next();
};

module.exports = hello;