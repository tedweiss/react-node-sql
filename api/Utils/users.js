const {con} = require('./connection')

module.exports = {
  getAllUsers: () => {
    return new Promise(function (resolve, reject) {
      const queryString = `SELECT * FROM users`
      con.query(queryString, (err, rows) => {
        if (err) {
          return reject(err)
        }
        resolve(rows)
      })
    })
  },
  getUser: email => {
    return new Promise(function (resolve, reject) {
      const queryString = `SELECT * FROM users WHERE email = '${email}'`
      con.query(queryString, (err, rows) => {
        if (err) {
          return reject(err)
        }
        resolve(rows)
      })
    })
  },
}
