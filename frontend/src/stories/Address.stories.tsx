import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'

import {Address, AddressProps} from '../ui/Address'

export default {
  title: 'Address',
  component: Address,
} as Meta

const Template: Story<AddressProps> = args => <Address {...args} />

export const AddressStory = Template.bind({})
AddressStory.args = {
  type: 'Home',
  street1: '123 Main St.',
  street2: 'Apt. 2B',
  city: 'Anywhere',
  state: 'MI',
  zip: '90210',
  extendedZip: '0987',
}
