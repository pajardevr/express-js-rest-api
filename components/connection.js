const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connect.connect(function (err) {
    if (err) throw err;
});

module.exports = connect;