import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {Profiles, ProfilesProps} from '../ui/Profiles'
import {addresses, profiles} from './mockData/mockData'

const mock = new MockAdapter(axios)

mock.onGet('/api/addresses').reply(200, addresses)

export default {
  title: 'Profiles',
  component: Profiles,
} as Meta

const Template: Story<ProfilesProps> = args => <Profiles {...args} />

export const ProfilesStory = Template.bind({})
ProfilesStory.args = {profiles}
