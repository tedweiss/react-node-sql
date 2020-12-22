import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {Profile, ProfileProps} from '../ui/Profile'
import {addresses, profile1} from './mockData/mockData'

const mock = new MockAdapter(axios)

mock.onGet('/api/addresses').reply(200, addresses)
export default {
  title: 'Profile',
  component: Profile,
} as Meta

const Template: Story<ProfileProps> = args => <Profile {...args} />

export const ProfileStory = Template.bind({})
ProfileStory.args = {...profile1}
