const fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response = `<h1>Hello, ${name}!</h1>`
};

module.exports = {
    'GET /hello/:name': fn_hello
};