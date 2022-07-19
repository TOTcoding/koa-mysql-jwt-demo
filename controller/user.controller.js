const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

class authController {
   async login(ctx, next) {
    const { id, username } = ctx.user;
    const token = jwt.sign({id, username}, PRIVATE_KEY, {
        expiresIn: 5,
        algorithm: 'RS256'
    });

    ctx.body = {id, username, token};
  }
}

module.exports = new authController()