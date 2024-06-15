require('dotenv').config()

module.exports = {
    database_uri: process.env.DATABASE_URI,
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    CLIENT_URL: process.env.CLIENT_URL,
    SERVER_URL: process.env.SERVER_URL
}