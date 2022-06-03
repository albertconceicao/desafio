const mysql = require('mysql');

const localConfig = mysql.createPool({
    connectionLimit: 100,
    host:  "localhost",
    port:  3306,
    user:  "root",
    password:  "password",
    database:  "algetec",
})
const pool = mysql.createPool(localConfig);
module.exports = pool;