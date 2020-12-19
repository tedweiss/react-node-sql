import React from 'react'

export interface AddressProps {
  id: number
  type: string
  street1: string
  street2: string
  city: string
  state: string
  zip: string
  extendedZip: string
}

export const Address: React.FC<AddressProps> = ({
  type,
  street1,
  street2,
  city,
  state,
  zip,
  extendedZip,
}) => {
  const fullZip = extendedZip ? zip + '-' + extendedZip : zip
  return (
    <div>
      <div>{type}</div>
      <div>{street1}</div>
      <div>{street2}</div>
      <div>{city}</div>
      <div>{state}</div>
      <div>{fullZip}</div>
    </div>
  )
}
