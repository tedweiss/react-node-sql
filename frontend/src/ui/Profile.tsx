import React from 'react'
import {Addresses} from './Addresses'
import useFetch from '../services/useFetch'

export interface ProfileProps {
  id: number
  firstName: string
  middleName: string
  lastName: string
  birthDate: string
  birthCity: string
  birthState: string
  height: string
  weight: number
  bloodType: string
}

export const Profile: React.FC<ProfileProps> = ({
  firstName,
  middleName,
  lastName,
  birthDate,
  birthCity,
  birthState,
  height,
  weight,
  bloodType,
}) => {
  const {data, loading} = useFetch('/api/addresses', [])

  const addresses = data
  return (
    <div>
      <div>{firstName}</div>
      <div>{middleName}</div>
      <div>{lastName}</div>
      <div>{birthDate}</div>
      <div>{birthCity}</div>
      <div>{birthState}</div>
      <div>{height}</div>
      <div>{weight}</div>
      <div>{bloodType}</div>
      {!loading && <Addresses addresses={addresses} />}
    </div>
  )
}
