const EventEmitter = require('events')

class Play extends EventEmitter {}

let player = new Play()

player.on('play', track => {
    console.log(`正在播放 《${track}》`)
})

player.once('playonce', track => {
    console.log(`正在播放 《${track}》`)
})

player.emit('play', '再见理想')
player.emit('play', 'amani')

player.emit('playonce', '再见理想')
player.emit('playonce', 'amani') // 不会执行 once发布的时间只会执行一次
