const router = require('koa-router')
const { verifyUser } = require('../middleware/user.middleware')
const { verifyAuth } = require('../middleware/auth.middleware')
const { login } = require('../controller/user.controller')

const userRouter = new router({ prefix: '/user' })

userRouter.post('/login', verifyUser, login)
userRouter.post('/verify', verifyAuth)

module.exports = userRouter