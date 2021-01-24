import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'

import {Address, AddressProps} from '../ui/Address'
import {address1} from './mockData/mockData'

export default {
  title: 'Address',
  component: Address,
} as Meta

const Template: Story<AddressProps> = args => <Address {...args} />

export const AddressStory = Template.bind({})
AddressStory.args = {address: address1}
