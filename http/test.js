'use strict'
const fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

const root = path.resolve('.');

const server = http.createServer(function (request, response) {
    let pathName = url.parse(request.url).pathname;
    let filePath = path.join(root, pathName);

    console.log("pathName:", pathName, "fillPath:", filePath)

    fs.stat(filePath, function (err, data) {
        response.writeHead(404);
        if (!err && data.isFile()) {

        } else if (!err && data.isDirectory()) {
            //readdir 读取文件夹方法
            fs.readdir(filePath, (err, data) => {
                console.log(data)
                let dir = data.filter((item, index) => (item == "index.html" || item == "default.html"))
                if (dir) {
                    for (let i = 0; i < dir.length; i++) {
                        fs.createReadStream(dir[i]).pipe(response)
                    }
                } else {
                    // 发送404响应:
                }
            })
        }
    })
})

server.listen(9080)
console.log('Server is running at http://127.0.0.1:9080/');
