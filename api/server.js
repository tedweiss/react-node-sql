const express = require('express')
const app = express()
const addresses = require('./Routes/addresses.js')
const profiles = require('./Routes/profiles.js')
const users = require('./Routes/users.js')
const port = 5000

app.use('/api/addresses', addresses)
app.use('/api/profiles', profiles)
app.use('/api/users', users)

app.get('/', (req, res) => {
  res.send('App Works !!!!')
})

try {
  app.listen(port, () => {
    console.log(`Server listening on the port::${port}`)
  })
} catch (error) {
  console.log('Did not work.', error)
}
