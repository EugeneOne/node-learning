//导入的是一个class,因此用大写的Koa表示
const Koa = require('koa');

//创建一个Koa对象表示web app本身：
const app = new Koa();

//对于任何请求,app将调用该异步函数处理请求:
app.use(async (ctx, next) => {
    //next是koa传入的将要处理的下一个异步函数。
    await next();
    console.log(1)
    //ctx是由koa传入的封装了request和response的变量
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2</h1>'
});

app.use(async (ctx, next) => {
    console.log("2")
    await next();
});

app.use(async (ctx, next) => {
    console.log("3")
    await next();
});

app.listen(3000);
console.log('app started at port 3000...');

