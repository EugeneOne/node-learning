const fs = require('fs')
const zlib = require('zlib')

var fileReadStream = fs.createReadStream('stream/data.json')
var fileWriteStream = fs.createWriteStream('stream/data.gzip')

fileWriteStream.on('pipe', source => {
    console.log(source)
})
fileReadStream.pipe(zlib.createGzip()).pipe(fileWriteStream)
