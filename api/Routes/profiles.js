const express = require('express')
const router = express.Router()
const {getAllProfiles} = require('../Utils/profiles')

router.get('/', function (req, res) {
  console.log('api/profiles called!!!!')
  getAllProfiles()
    .then(addresses => {
      res.json(addresses)
    })
    .catch(err => {
      console.log('catch err: ', err)
    })
})

router.get('/:userId', function (req, res) {
  console.log('api/profiles/:userId called!!!!')
  res.json(profile)
})

router.post('/', function (req, res) {
  res.send('POST route on profiles.')
})

module.exports = router
