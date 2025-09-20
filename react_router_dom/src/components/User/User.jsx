import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
     const {userId,age} =useParams()
  return (
   <div>
     <div>User :{userId} </div>
    <div>User : {age}</div>
   </div>
  )
}

export default User