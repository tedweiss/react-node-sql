import React from 'react'

export interface AddressProps {
  address: AddressObjProps
}
export interface AddressObjProps {
  id: number
  type: string
  street1: string
  street2: string
  city: string
  state: string
  zip: string
  extendedZip: string
}

export const Address: React.FC<AddressProps> = ({address}) => {
  const fullZip = address.extendedZip
    ? address.zip + '-' + address.extendedZip
    : address.zip
  return (
    <div>
      <div>{address.type}</div>
      <div>{address.street1}</div>
      <div>{address.street2}</div>
      <div>{address.city}</div>
      <div>{address.state}</div>
      <div>{fullZip}</div>
    </div>
  )
}
