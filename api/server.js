const express = require('express')
const app = express()
const addresses = require('./Routes/addresses.js')
const port = 5000

app.use('/api/addresses', addresses)

app.get('/', (req, res) => {
  res.send('App Works !!!!')
})

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
})
