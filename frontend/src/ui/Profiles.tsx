import React, {useState} from 'react'
import {Profile, ProfileProps} from './Profile'

export interface ProfilesProps {
  profiles: ProfileProps[]
}

export const Profiles: React.FC<ProfilesProps> = ({profiles}) => {
  const [selectedProfile, setSelectedProfile] = useState<number>()
  return (
    <div>
      Profiles
      {!selectedProfile &&
        profiles.map(profile => {
          return (
            <div
              onClick={() => setSelectedProfile(profile.id)}
              key={profile.id}
            >{`${profile.firstName} ${profile.lastName}`}</div>
          )
        })}
      {selectedProfile &&
        profiles.map(profile => {
          if (selectedProfile === profile.id) {
            return (
              <Profile
                key={profile.id}
                id={profile.id}
                firstName={profile.firstName}
                middleName={profile.middleName}
                lastName={profile.lastName}
                birthDate={profile.birthDate}
                birthCity={profile.birthCity}
                birthState={profile.birthState}
                birthCountry={profile.birthCountry}
                height={profile.height}
                weight={profile.weight}
                bloodType={profile.bloodType}
              />
            )
          }
        })}
    </div>
  )
}
