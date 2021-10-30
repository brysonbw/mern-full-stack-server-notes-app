const mysql = require('mysql2/promise')

const pool = mysql.createPool ({
    user: 'b1e67092acc09e',
    password: '7a32826e',
    host: 'us-cdbr-east-04.cleardb.com',
    port: 3306,
    database: 'heroku_36234a15071467c'
})

module.exports = pool