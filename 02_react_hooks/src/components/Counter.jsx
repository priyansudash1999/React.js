import React, { useReducer, useState } from 'react'
import {counterReducer, initialState} from "../CounterReducer.jsx"

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  const [input, setInput] = useState(0)

  const handleIncrement = () => {
    dispatch({type: "increment"})
  }
  const handleDecrement = () => {
    dispatch({type: "decrement"})
  }
  const handleIncrementByAmount = () => {
    dispatch({type: "incrementByAmount" , payload: +input})
    setInput(0)
  }
  const handleDecrementByAmount = () => {
    dispatch({type: "decrementByAmount", payload: +input})
    setInput(0)
  }
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>

      <div>
        <input type='number' value={input} onChange={e => setInput(e.target.value)}/>

        <button onClick={handleIncrementByAmount}>add</button>
        <button onClick={handleDecrementByAmount}>substract</button>
      </div>
    </div>
  )
}

export default Counter