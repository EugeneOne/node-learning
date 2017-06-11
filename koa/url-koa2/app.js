//导入的是一个class,因此用大写的Koa表示
const Koa = require('koa');

//用于解析request的body(必须在router之前注册)
const bodyParser = require('koa-bodyparser');

const controllers = require('./controllers')

//创建一个Koa对象表示web app本身：
const app = new Koa();


app.use(bodyParser());
app.use(controllers());

app.listen(3000);
console.log('app started at port 3000...');

