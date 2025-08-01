import React from 'react'
import CompoA from './components/CompoA'

const App = () => {
  const myName = 'Priyansu'
  return (
    <div>
      <CompoA name={myName}/>
    </div>
  )
}

export default App