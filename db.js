const mysql = require('mysql2/promise')

const pool = mysql.createPool ({
    user: 'root',
    password: 'Rrnyork212^',
    host: 'localhost',
    port: 3306,
    database: 'notes_db'
})

module.exports = pool