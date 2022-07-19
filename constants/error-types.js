const USERNAME_OR_PASSWORD_IS_NOT_EMPTY = "username_or_password_is_not_empty"   //用户名或密码不存在
const USER_ALREADY_EXISTS = "user_already_exists"       //用户已存在
const USER_DOES_NOT_EXISTS = "user_does_not_exists"     //用户不存在
const PASSWORD_IS_ERROR = "password_is_error"           //密码错误
const UNPERMISSION = "unpermission"

//  token错误
const TOKENEXPIRED_ERROR = 'TokenExpiredError'      //过期
const JSONWEBTOKEN_ERROR = 'JsonWebTokenError'      //无效
const NOTBEFORE_ERROR = 'NotBeforeError'            //未激活

module.exports = {
    USERNAME_OR_PASSWORD_IS_NOT_EMPTY,
    USER_ALREADY_EXISTS,
    USER_DOES_NOT_EXISTS,
    PASSWORD_IS_ERROR,
    UNPERMISSION,

    TOKENEXPIRED_ERROR,
    JSONWEBTOKEN_ERROR,
    NOTBEFORE_ERROR
}