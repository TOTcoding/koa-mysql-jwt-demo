const UserService = require('../service/user.service')
const errorTypes = require('../constants/error-types')

const verifyUser = async (ctx, next) => {
  const { username, password } = ctx.request.body
  //  用户名或密码不为空
  if (!username || !password) {
    const error = new Error(errorTypes.USERNAME_OR_PASSWORD_IS_NOT_EMPTY)
    return ctx.app.emit('error', error, ctx)
  }

  const result = await UserService.getUserByName(username)
  //  用户存不存在
  if (!result.length) {
    const error = new Error(errorTypes.USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }
  //  密码错误
  const user = result[0]
  if (password != user.password) {
    const error = new Error(errorTypes.PASSWORD_IS_ERROR)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.user = user
  next()
}

module.exports = {
  verifyUser
}