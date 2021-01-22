const express = require('express')
const router = express.Router()
const {getAllUsers, getUser} = require('../Utils/users')

router.get('/', function (req, res) {
  console.log('api/users called!!!!')
  getAllUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log('catch err: ', err)
    })
})

router.get('/:email', function (req, res) {
  console.log('api/users/:email called!!!!')
  const email = req.params.email
  getUser(email)
    .then(id => {
      res.json(id[0].id)
    })
    .catch(err => {
      console.log('catch err: ', err)
    })
})

router.post('/', function (req, res) {
  res.send('POST route on profiles.')
})

module.exports = router
