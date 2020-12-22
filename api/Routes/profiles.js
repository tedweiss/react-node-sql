var express = require('express')
var router = express.Router()
const data = require('../Utils/data')

router.get('/', function (req, res) {
  console.log('api/profiles called!!!!')
  res.json(data.profiles)
})

router.get('/:userId', function (req, res) {
  console.log('api/profiles/:userId called!!!!')
  res.json(profile)
})

router.post('/', function (req, res) {
  res.send('POST route on profiles.')
})

module.exports = router
