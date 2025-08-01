// src/App.jsx
import React from 'react'
import CompoA from './components/CompoA'
import Data from './DataContext'  

const App = () => {
  const name = 'priyansu'

  return (
    <div>
      <Data.Provider value={name}>
        <CompoA />
      </Data.Provider>
    </div>
  )
}

export default App
