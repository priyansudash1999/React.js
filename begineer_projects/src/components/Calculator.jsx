import React, { useState } from 'react'

const Calculator = () => {
  const [input, setInput] = useState("")

  const clear = () => {
    setInput('')
  }
  const dispatch = (val) => {
    setInput(input + val)
    console.log(val);
  }

  const calculate = () => {
    setInput(eval(input))
  }

  const clearLastItem = () => {
    setInput(input.slice(0, -1))
  }

  return (
    <form className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <input
        type="text"
        className='w-64 text-right p-4 text-2xl border rounded-md shadow-md mb-4 bg-white text-black'
        value={input}
        readOnly
      />

      <div className='grid grid-cols-4 gap-4 w-64'>
        <span
          className='bg-red-400 text-white text-xl font-bold p-4 rounded-md cursor-pointer hover:bg-red-500 text-center'
          onClick={clear}
        >
          C
        </span>
        <span onClick={() => dispatch('%')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>%</span>
        <span onClick={() => clearLastItem()} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>x</span>
        <span onClick={() => dispatch('/')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>/</span>
        <span onClick={() => dispatch('7')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>7</span>
        <span onClick={() => dispatch('8')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>8</span>
        <span onClick={() => dispatch('9')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>9</span>
        <span onClick={() => dispatch('*')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>*</span>
        <span onClick={() => dispatch('4')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>4</span>
        <span onClick={() => dispatch('5')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>5</span>
        <span onClick={() => dispatch('6')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>6</span>
        <span onClick={() => dispatch('-')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>-</span>
        <span onClick={() => dispatch('1')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>1</span>
        <span onClick={() => dispatch('2')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>2</span>
        <span onClick={() => dispatch('3')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>3</span>
        <span onClick={() => dispatch('+')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>+</span>
        <span onClick={() => dispatch('00')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>00</span>
        <span onClick={() => dispatch('0')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>0</span>
        <span onClick={() => dispatch('.')} className='bg-gray-200 text-xl p-4 rounded-md text-center cursor-pointer hover:bg-black'>.</span>
        <span onClick={() => calculate()} className='text-xl px-5 py-4 rounded-[50%] text-center cursor-pointer bg-gradient-to-r from-cyan-400 to-pink-500 hover:from-black hover:to-black'>=</span>

      </div>
    </form>
  )
}

export default Calculator
