'use strict'

const fs = require('fs'),
      http = require('http'),
      path = require('path'),
      url = require('url');

const root = path.resolve('.');

const server = http.createServer(function( request, response ) {
    let pathName = url.parse(request.url).pathname;
    let fillPath = path.join(root,pathName);
    console.log("pathName:",pathName,"fillPath:",fillPath)
    fs.stat(fillPath, function(err, data) {
        if(!err&&data.isFile()) {
            console.log('200')
            response.writeHead(200);
            fs.createReadStream(fillPath).pipe(response)
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })
})

server.listen(8090);

console.log('Server is running at http://127.0.0.1:8080/');