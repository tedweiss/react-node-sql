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
  birthCountry: string
  height: string
  weight: number
  bloodType: string
}

export const Profile: React.FC<ProfileProps> = ({
  id,
  firstName,
  middleName,
  lastName,
  birthDate,
  birthCity,
  birthState,
  birthCountry,
  height,
  weight,
  bloodType,
}) => {
  const {data, loading} = useFetch('/api/addresses/' + id, [])

  const addresses = data
  return (
    <div>
      <div>{firstName}</div>
      <div>{middleName}</div>
      <div>{lastName}</div>
      <div>{birthDate}</div>
      <div>{birthCity}</div>
      <div>{birthState}</div>
      <div>{birthCountry}</div>
      <div>{height}</div>
      <div>{weight}</div>
      <div>{bloodType}</div>
      {!loading && <Addresses addresses={addresses} />}
    </div>
  )
}
