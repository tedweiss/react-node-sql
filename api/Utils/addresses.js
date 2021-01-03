const {con} = require('./connection')

module.exports = {
  getAllAddresses: () => {
    return new Promise(function (resolve, reject) {
      const queryString = `SELECT * FROM addresses`
      con.query(queryString, (err, rows) => {
        if (err) {
          return reject(err)
        }
        resolve(rows)
      })
    })
  },
  getProfileAddresses: profileId => {
    return new Promise(function (resolve, reject) {
      const queryString = `SELECT * FROM addresses WHERE id = ${profileId}`
      con.query(queryString, (err, rows) => {
        if (err) {
          return reject(err)
        }
        resolve(rows)
      })
    })
  },
}
