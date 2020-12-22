const express = require('express')
const router = express.Router()
const data = require('../Utils/data')

router.get('/', function (req, res) {
  console.log('api/addresses called!!!!')
  res.json(data.addresses)
})

router.get('/:userId', function (req, res) {
  console.log('api/addresses/:userId called!!!!')
  console.log('req.params', req.params)
  res.json(req.params)
})
router.post('/', function (req, res) {
  res.send('POST route on addresses.')
})

module.exports = router
