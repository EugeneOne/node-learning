'use strict'

const fs = require('fs');

// 异步读取文件
fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log("异步读取文件：", data)
    }
})
// 异步读取二进制文件（图片）
fs.readFile('logo.png', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log("异步读取二进制文件：", data) //读取的是Buffer文件(类似Array)
        let value = data.toString('utf-8');
        //console.log("异步读取二进制文件：",value) //转换成utf-8编码
    }
})

// 同步读取文件
try {
    let data = fs.readFileSync('test.txt', 'utf-8');
    console.log("同步读取文件：", data);
} catch (error) {
    console.log("error")
}

//异步写文件
let data = "异步写文件"
fs.writeFile("write.txt", data, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("异步文件写入成功")
    }
})

//同步写文件
let data2 = "同步写文件"
try {
    fs.writeFileSync("write2.txt", data2)
    console.log("同步文件写入成功")
} catch (error) {
    console.log(erro)
}

//获取文件信息
fs.stat('test.txt', function (err, stat) {
    if (err) {
        console.log("获取文件信息:", err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

//由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。