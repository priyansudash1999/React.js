import React, { useEffect, useState, useRef } from 'react'

const Timer = () => {

  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prev => prev+1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <h1>Timer: {count} secs</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  )
}

export default Timer