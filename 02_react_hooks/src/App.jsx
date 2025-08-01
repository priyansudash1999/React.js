import React, { useEffect, useState } from 'react'

const App = () => {

  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value+1)
  }

  useEffect(() => {
    console.log("Called useEffect hook");
    document.title = `Increment ${value}`
  }, [value])
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App