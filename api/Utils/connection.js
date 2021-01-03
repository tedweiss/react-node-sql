const mysql = require('mysql')
const login = require('./login') // ./exampleLogin.js

const con = mysql.createConnection({
  host: login.host,
  user: login.user,
  password: login.password,
  database: login.dbName,
})

con.connect((err, result) => {
  if (err) throw err
  console.log('Connected!')
  if (err) throw err
  console.log('Result: ' + JSON.stringify(result))
})

module.exports = {con}
