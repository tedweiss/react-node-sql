const address1 = {
  id: 123,
  type: 'Home',
  street1: '123 Main St.',
  street2: 'Apt. 2B',
  city: 'Anywhere',
  state: 'MI',
  country: 'US',
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
  country: 'US',
  zip: '12345',
  extendedZip: '6789',
}

const addresses = [address1, address2]

const profile1 = {
  id: 1234567890,
  firstName: 'Tony',
  middleName: 'Awesome',
  lastName: 'Stark',
  birthDate: '1970-05-29',
  birthCity: 'Manhattan',
  birthState: 'NY',
  birthCountry: 'US',
  height: '6\'1"',
  weight: 225,
  bloodType: 'A+',
}

const profile2 = {
  id: 2,
  firstName: 'Pepper',
  middleName: 'Sweet',
  lastName: 'Potts',
  birthDate: '1972-04-10',
  birthCity: 'Sacramento',
  birthState: 'CA',
  birthCountry: 'US',
  height: '5\'11"',
  weight: 145,
  bloodType: 'O',
}

const profile3 = {
  id: 12345,
  firstName: 'Clark',
  middleName: 'Super',
  lastName: 'Kent',
  birthDate: '1977-04-17',
  birthCity: 'Kryptonopolis',
  birthState: 'Krypton',
  birthCountry: '',
  height: '6\'3"',
  weight: 235,
  bloodType: 'A-',
}

const profile4 = {
  id: 4,
  firstName: 'Lois',
  middleName: 'Joanne',
  lastName: 'Lane',
  birthDate: '1977-08-17',
  birthCity: 'Pittsdale',
  birthState: 'IA',
  birthCountry: 'US',
  height: '5\'3"',
  weight: 115,
  bloodType: 'AB',
}

const profiles = [profile1, profile2, profile3, profile4]

const user1 = {
  id: 1,
  email: 'tony.stark@starkindustry.com',
}

const user2 = {
  id: 2,
  email: 'clark.kent@dailyplanet.com',
}

const users = [user1, user2]

module.exports = {
  address1,
  address2,
  addresses,
  profile1,
  profile2,
  profile3,
  profile4,
  profiles,
  user1,
  user2,
  users,
}
