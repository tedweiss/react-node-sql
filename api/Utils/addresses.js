const {con} = require('./connection')

let addresses = []

con.connect(err => {
  if (err) throw err
  const queryString = 'SELECT * FROM addresses'
  con.query(queryString, (err, results) => {
    if (err) throw err
    results.map(result => {
      addresses.push(result)
    })
  })
})

module.exports = {addresses}
