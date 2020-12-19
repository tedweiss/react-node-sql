var express = require('express')
var router = express.Router()

const address1 = {
  id: 123,
  type: 'Home',
  street1: '123 Main St.',
  street2: 'Apt. 2B',
  city: 'Anywhere',
  state: 'MI',
  zip: '90210',
  extendedZip: '',
}
const address2 = {
  id: 456,
  type: 'Work',
  street1: '123 Park',
  street2: 'Apt. C4',
  city: 'Somewhere',
  state: 'WI',
  zip: '12345',
  extendedZip: '6789',
}
const addresses = [address1, address2]

router.get('/', function (req, res) {
  console.log('api/addresses called!!!!')
  console.log('addresses: ', addresses)
  res.json(addresses)
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
