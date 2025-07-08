import React, { useState } from 'react'

const TodoList = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState("")

  const addItemInList = (e) => {
    e.preventDefault()
    if(input.trim()){
      setList([...list, input])
      setInput("")
      console.log(input);
      
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addItemInList}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='add new todo'/>
        <button type='submit'>Add</button>
      </form>

      <ul>
        {list.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList