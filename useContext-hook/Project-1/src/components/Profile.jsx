import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext)
    if(!user)return 
  return (
    <div>
        <h2>Welcome {user.userName}</h2>
    </div>
  )
}

export default Profile