import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'

import {Addresses, AddressesProps} from '../ui/Addresses'

export default {
  title: 'Addresses',
  component: Addresses,
} as Meta

const Template: Story<AddressesProps> = args => <Addresses {...args} />

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

export const AddressesStory = Template.bind({})
AddressesStory.args = {addresses}
