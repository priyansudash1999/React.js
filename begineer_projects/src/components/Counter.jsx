import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount]  = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1)
  }

  return (
    <div className='flex justify-center flex-col gap-4 items-center h-screen'>
      <div>
        <h1 className='text-5xl'>{count}</h1>
      </div>

      <div className='flex gap-10 mt-[50px]'>
        <button onClick={increment} class="relative inline-block p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mr-[100px]">
          <span class="block bg-black hover:bg-amber-950 text-white font-medium rounded-md px-4 py-2">
            +
          </span>
        </button>

        <button onClick={decrement} class="relative inline-block p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          <span class="block bg-black hover:bg-amber-950 text-white font-medium rounded-md px-4 py-2">
            -
          </span>
        </button>
      </div>
    </div>
  )
}

export default Counter