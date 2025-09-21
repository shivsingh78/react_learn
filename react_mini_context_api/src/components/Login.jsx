import React, { useContext, useState } from 'react'
import UserContex from '../context/UserContext'

function Login() {
     const [userName,setUserName]=useState() 
     const [password,setPassword]=useState() 
     const {setUser}=useContext(UserContex)

     const handleSubmit = (e) => {
          e.preventDefault()
          setUser({userName,password})
     }

     return (
    <div>
     <h2>user Login</h2>
     <input 
     value={userName}
     onChange={(e)=>setUserName(e.target.value)}
     type="username" placeholder='enter name' />
     <input
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
      type="password" placeholder='enter password' />
      <button onClick={handleSubmit} >submit</button>
    </div>
  )
}

export default Login