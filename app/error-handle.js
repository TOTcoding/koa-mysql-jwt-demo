const errorTypes = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorTypes.USERNAME_OR_PASSWORD_IS_NOT_EMPTY:
      status = 401
      message = '用户名或密码为空~'
      break;
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 401
      message = '用户不存在~'
      break;
    case errorTypes.PASSWORD_IS_ERROR:
      status = 401
      message = '密码错误~'
      break;
    case errorTypes.TOKENEXPIRED_ERROR:
      status = 401
      message = '登录信息已过期~'
      break;
    case errorTypes.JSONWEBTOKEN_ERROR:
      status = 401
      message = '登录信息无效~'
      break;
    case errorTypes.TOKENEXPIRED_ERROR:
      status = 401
      message = '登录信息错误~'
      break;
  }
  // ctx.status = status
  ctx.body = {
    status,
    message
  }
}

module.exports = errorHandler