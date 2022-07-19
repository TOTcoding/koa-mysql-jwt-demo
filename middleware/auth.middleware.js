const jwt = require('jsonwebtoken')
const { PUBLIC_KEY } = require('../app/config')
const errorTypes = require('../constants/error-types')

const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization || ''
  const token = authorization.replace('Bearer ', '')
  console.log(token)

  jwt.verify(token, PUBLIC_KEY, function (err, decoded) {
    if (err) {
      const error = new Error(err.name)
      // console.log(error);
      switch (error.message) {
        case 'TokenExpiredError':
          return ctx.app.emit('error', error, ctx) //Token过期
          break
        case 'JsonWebTokenError':
          return ctx.app.emit('error', error, ctx) //Token无效
          break
        case 'NotBeforeError':
          return ctx.app.emit('error', error, ctx) //Token未激活
          break
      }
    }
  })

  next()
}

module.exports = {
  verifyAuth
}
