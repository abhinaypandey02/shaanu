import React from 'react'
import UserInterface from '../../interfaces/user'

export default function UserInfo({user}:{user:UserInterface}) {
    return (
        <div>
            <h3>Car Profiles</h3>
            {user.carProfiles.length===0&&<div className="text-danger">This user has not created any car profiles</div>}
            {user.carProfiles.map(profile=><div className="border border-black m-2 p-2">
                <div>Name: {profile.name}</div>
                <div>Registration No: {profile.regNo}</div>
            </div>)}
        </div>
    )
}
