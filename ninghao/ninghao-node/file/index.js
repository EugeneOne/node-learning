const fs = require('fs')

// stat方法：获取文件信息
// fs.stat('./index.js', (error, stats) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(stats)
//         // 判断是否是文件
//         console.log('isFile:', stats.isFile())
//         // 判断是否是文件夹
//         console.log('isFile:', stats.isDirectory())
//     }
// })

// mkdir
// fs.mkdir('file/log', error => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('成功创建目录log')
//     }
// })

// writeFile appendFile
/*
 * 参数一：创建或者写入的文件
 * 参数二：写入的内容
 * 参数三：回调函数
 */
// writeFile 若没有该文件则创建 若有 则覆盖内容
// fs.writeFile('file/log/logs.log', 'hello ~', err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('创建logs.log文件写入内容成功')
//     }
// })
// // appendFile 追加 写入
// fs.appendFile('file/log/logs.log', 'hello eugene ~', err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('创建logs.log文件写入内容成功')
//     }
// })

// readFile && readdir
// fs.readdir('file/log', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// rename
// fs.rename('file/log/logs.log', 'file/log/rename.log', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('重命名成功')
//     }
// })

// rmdir: 删除文件夹(只能删除空文件夹)
// unlink: 删除文件
fs.readdirSync('file/log.1').map(file => {
    fs.unlink(`file/log.1/${file}`)
})
fs.rmdir('file/log.1', err => {
    if (err) {
        console.log(err)
    } else {
        console.log('删除成功')
    }
})
