const { config } = require('dotenv')
const jwt = require('jsonwebtoken');
config()

module.exports = {
  database_uri: process.env.DATABASE_URI,
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  SECRET: process.env.SECRET,
}

