import React from 'react'
import UserContexProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContexProvider>
      <div className=' text-2xl '>React with context api</div>
      <Login/>
      <Profile/>
    </UserContexProvider>
  )
}

export default App