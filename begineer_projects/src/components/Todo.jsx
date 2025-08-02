import React, { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const handleClick = () => {
    if (!input.trim()) return // prevent empty todos

    setTodos(todo => [
      ...todo,
      {
        text: input,
        id: Date.now(), // better unique ID
      },
    ])
    setInput('')
  }

  const removeTodo = (id) => {
    setTodos(todo => todo.filter(t => t.id !== id))
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="flex justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Type todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </div>

      <ul className="mt-8 w-full max-w-md space-y-3">
        {todos.map(({ text, id }) => (
          <li
            key={id}
            className="bg-white px-4 py-3 rounded shadow flex justify-between items-center"
          >
            <span className="text-gray-800 text-base">{text}</span>
            <button
              onClick={() => removeTodo(id)}
              className="text-red-500 hover:text-red-700 font-bold text-xl"
              title="Delete"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
