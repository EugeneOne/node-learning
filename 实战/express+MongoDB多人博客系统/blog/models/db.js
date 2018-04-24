var setting = require('../settings'),
  Db = require('mongodb').Db,
  Connection = require('mongodb').Connection,
  Server = require('mongodb').Server

// 创建一个数据库连接实例，设置数据库名字，地址和端口
module.exports = new Db(setting.db, new Server(setting.host, setting.port), {
  safe: true
})
