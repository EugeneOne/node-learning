'use strict'

//导入http模块
const http = require('http');
//用于解析url
const url = require('url');
//用于解析本地路径
const path = require('path');

//创建http,server,并传入回调函数
const server = http.createServer(function (request, response) {
    //回调函数接受request和response对象
    //获取method和url
    console.log(request.method + ':' + request.url);
    //将http响应200写入response,同时设置content-type: text/html
    response.writeHead(200, {'content-type':'text/html'})
    //写入响应内容
    response.end("<h1>Hello World</h1>")
})

server.listen(8090);

console.log('Server is running at http://127.0.0.1:8090/')
//url通过parse()将一个字符串解析为一个Url对象：
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'))

// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'
console.log("filePath:",filePath)