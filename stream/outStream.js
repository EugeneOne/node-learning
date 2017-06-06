'use strict'
const fs = require('fs')

//打开一个流
const rs = fs.createReadStream('test.txt', 'utf-8');

//data表示流的数据已经可以读取了
rs.on('data', function(chunck) {
    console.log("DATA: "+chunck)
});

//end表示这个流已经到结尾了
rs.on('end', function() {
    console.log("END")
})

//错误
rs.on('error', function(err) {
    console.log("error:" + err)
})