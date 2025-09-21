import React, { useContext } from 'react'
import UserContex from '../context/UserContext'

function Profile() {
     const {user}=useContext(UserContex)
  if(!user) return <div>User not found</div>
  return <h1>username: {user.userName} Password:{user.password} </h1>
}

export default Profile