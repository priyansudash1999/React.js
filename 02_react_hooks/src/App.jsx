// src/App.jsx
import React from 'react'
import CompoA from './components/CompoA'
import Data from './DataContext'  
import { UserProvider } from './UserContext'
import UserProfile from './components/UserProfile'
import UpdateUser from './components/UpdateUser'

const App = () => {

  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  )
}

export default App
