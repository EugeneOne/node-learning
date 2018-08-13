const http = require('http')

var options = {
    protocol: 'http:',
    hostname: 'api.douban.com',
    port: '80',
    method: 'GET',
    path: '/v2/movie/top250'
}

let count = 0
let responseData = ''

var request = http.request(options, response => {
    response.setEncoding('utf8')
    response.on('data', chunck => {
        console.log(`${++count}`)
        responseData += chunck
    })
    response.on('end', () => {
        JSON.parse(responseData).subjects.map(item => {
            console.log(item.title)
        })
    })
})
request.on('error', error => {
    console.log(error)
})

request.end()
