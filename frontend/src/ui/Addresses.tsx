import React from 'react'
import {Address, AddressProps} from './Address'

export interface AddressesProps {
  addresses: AddressProps[]
}

export const Addresses: React.FC<AddressesProps> = ({addresses}) => {
  return (
    <div>
      Addresses
      {addresses.map(address => {
        return (
          <Address
            key={address.id}
            id={address.id}
            type={address.type}
            street1={address.street1}
            street2={address.street2}
            city={address.city}
            state={address.state}
            zip={address.zip}
            extendedZip={address.extendedZip}
          />
        )
      })}
    </div>
  )
}
