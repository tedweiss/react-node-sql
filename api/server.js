const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000

// place holder for the data
const users = []

app.use(bodyParser.json())

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!')
  res.json(users)
})

app.get('/', (req, res) => {
  res.send('App Works !!!!')
})

app.post('/api/user', (req, res) => {
  const user = req.body.user
  console.log('Adding user::::::::', user)
  users.push(user)
  res.json('user addedd')
})

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
})
