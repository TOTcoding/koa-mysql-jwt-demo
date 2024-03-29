const fs = require('fs')
const path = require('path')

const dotenv = require('dotenv')
dotenv.config()

const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname)+ '/key/public.key')
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname)+ '/key/private.key')


module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD 
} = process.env
module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
