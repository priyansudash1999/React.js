// src/App.jsx
import React, { useReducer } from 'react'
// import CompoA from './components/CompoA'
// import Data from './DataContext'  
// import { UserProvider } from './UserContext'
// import UserProfile from './components/UserProfile'
// import UpdateUser from './components/UpdateUser'

const initialState = {count: 0}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, count: state.count + 1}
    case "decrement":
      return {...state, count: state.count - 1}
    case "reset":
      return {...state, count: 0}
    default:
      return state
  }
}

const App = () => {

  // return (
  //   <UserProvider>
  //     <UserProfile />
  //     <UpdateUser />
  //   </UserProvider>
  // )

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1> count: {state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>
    </div>
  )
}

export default App
