const Pool = require('pg').Pool;
const { database_uri } = require('keys')

// const pool = new Pool({
//     user: "username",
//     password: "password",
//     host: "192.168.0.20",
//     port: 5432,
//     database: "username"
// });
const pool = new Pool({connectionString: database_uri})

// pool.on('events')

// const client = new Client({
//     host: 'localhost',
//     database: 'username',
//     user: 'username',
//     password: 'password',
//     port: 5432,  // Default PostgreSQL port
// });

// const client = new Client({connectionString: "postgres://username:password@192.168.0.20:5432/username"})

// client.connect()
//     .then(() => console.log('Connected to PostgreSQL'))
//     .catch(err => console.error('Connection error', err.stack));


module.exports = pool;
