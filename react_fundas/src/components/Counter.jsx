import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count+1)
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter