import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {Addresses, AddressesProps} from '../ui/Addresses'
import {addresses} from './mockData/mockData'

const mock = new MockAdapter(axios)

mock.onGet('/api/addresses/2').reply(200, addresses)

export default {
  title: 'Addresses',
  component: Addresses,
} as Meta

const Template: Story<AddressesProps> = args => <Addresses {...args} />

export const AddressesStory = Template.bind({})
AddressesStory.args = {id: 2}
