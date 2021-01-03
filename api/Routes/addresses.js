const express = require('express')
const router = express.Router()
const {getAllAddresses, getProfileAddresses} = require('../Utils/addresses')

router.get('/', function (req, res) {
  console.log('api/addresses called!!!!')
  getAllAddresses()
    .then(addresses => {
      res.json(addresses)
    })
    .catch(err => {
      console.log('catch err: ', err)
    })
})

router.get('/:profileId', function (req, res) {
  console.log('api/addresses/:profileId called!!!!')
  const id = parseInt(req.params.profileId)
  getProfileAddresses(id)
    .then(addresses => {
      res.json(addresses)
    })
    .catch(err => {
      console.log('catch err: ', err)
    })
})

router.post('/', function (req, res) {
  res.send('POST route on addresses.')
})

module.exports = router
