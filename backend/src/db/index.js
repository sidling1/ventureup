const { Pool } = require('pg')
const { database_uri } = require('../constants')
// const pool = new Pool({
//   user: 'username',
//   host: 'localhost',
//   database: 'pern_auth',
//   password: 'root',
//   port: 5432,
// })

const pool = new Pool({connectionString: database_uri})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
