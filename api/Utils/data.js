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

const profile1 = {
  id: 1234567890,
  firstName: 'Tony',
  middleName: 'Awesome',
  lastName: 'Stark',
  birthDate: 'May 29,1970',
  birthCity: 'Manhattan',
  birthState: 'New York',
  height: '6"1\'',
  weight: 225,
  bloodType: 'A+',
}

const profile2 = {
  id: 12345,
  firstName: 'Clark',
  middleName: 'Super',
  lastName: 'Kent',
  birthDate: 'April 17, 1977',
  birthCity: 'Kryptonoplis',
  birthState: 'Krypton',
  height: '6"3\'',
  weight: 235,
  bloodType: 'A-',
}

const profiles = [profile1, profile2]

module.exports = {address1, address2, addresses, profile1, profile2, profiles}
