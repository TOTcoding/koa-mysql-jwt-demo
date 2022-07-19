const connection = require('../app/database')

class UserService {
  async getUserByName(username) {
    const statement = `SELECT * FROM user WHERE username = ?;`
    const result = await connection.execute(statement, [username])
    return result[0]
  }
}

module.exports = new UserService()