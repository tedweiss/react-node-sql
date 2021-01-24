import React from 'react'
import {Addresses} from './Addresses'

export interface ProfileProps {
  profile: ProfileObjProps
}

export interface ProfileObjProps {
  id: number
  firstName: string
  middleName: string
  lastName: string
  birthDate: string
  birthCity: string
  birthState: string
  birthCountry: string
  height: string
  weight: number
  bloodType: string
}

export const Profile: React.FC<ProfileProps> = ({profile}) => {
  return (
    <div>
      <div>{profile.firstName}</div>
      <div>{profile.middleName}</div>
      <div>{profile.lastName}</div>
      <div>{profile.birthDate}</div>
      <div>{profile.birthCity}</div>
      <div>{profile.birthState}</div>
      <div>{profile.birthCountry}</div>
      <div>{profile.height}</div>
      <div>{profile.weight}</div>
      <div>{profile.bloodType}</div>
      <Addresses id={profile.id} />
    </div>
  )
}
