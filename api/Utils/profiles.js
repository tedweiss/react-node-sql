const {con} = require('./connection')

module.exports = {
  getAllProfiles: () => {
    return new Promise(function (resolve, reject) {
      const queryString = `SELECT * FROM profiles`
      con.query(queryString, (err, rows) => {
        if (err) {
          return reject(err)
        }
        resolve(rows)
      })
    })
  },
}
