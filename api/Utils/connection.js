const mysql = require('mysql')
const login = require('./login') // ./exampleLogin.js

const con = mysql.createConnection({
  host: login.host,
  user: login.user,
  password: login.password,
  database: login.dbName,
})

module.exports = {con}
