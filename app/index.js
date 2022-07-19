const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRoutes = require('../router')
const errorHandler = require('./error-handle')
const config = require('./config')

const app = new koa()
app.use(bodyParser())

userRoutes(app)
app.on('error', errorHandler)


app.listen(config.APP_PORT, () => {
  console.log("服务器启动成功~");
})

module.exports = app