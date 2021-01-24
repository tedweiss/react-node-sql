import React from 'react'
import {Address, AddressObjProps} from './Address'
import useFetch from '../services/useFetch'

export interface AddressesProps {
  id: number
}

export const Addresses: React.FC<AddressesProps> = ({id}) => {
  const {loading, data: addresses, error} = useFetch(`/api/addresses/${id}`, [])
  return (
    <>
      {!loading && !error && (
        <div>
          Addresses
          {addresses.map((address: AddressObjProps) => {
            return <Address key={address.id} address={address} />
          })}
        </div>
      )}
    </>
  )
}
