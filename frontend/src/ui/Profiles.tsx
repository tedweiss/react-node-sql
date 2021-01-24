import React, {useState} from 'react'
import {Profile, ProfileObjProps} from './Profile'
import useFetch from '../services/useFetch'

export interface ProfilesProps {
  id: number
}

export const Profiles: React.FC<ProfilesProps> = ({id}) => {
  const {loading, data: profiles, error} = useFetch(`/api/profiles/${id}`, [])

  const [selectedProfile, setSelectedProfile] = useState<number>()
  return (
    <>
      {!loading && !error && (
        <div>
          Profiles
          {!selectedProfile &&
            profiles.map((profile: ProfileObjProps) => {
              return (
                <div
                  onClick={() => setSelectedProfile(profile.id)}
                  key={profile.id}
                >{`${profile.firstName} ${profile.lastName}`}</div>
              )
            })}
          {selectedProfile &&
            profiles.map((profile: ProfileObjProps) => {
              if (selectedProfile === profile.id) {
                return <Profile key={profile.id} profile={profile} />
              }
            })}
        </div>
      )}
    </>
  )
}
