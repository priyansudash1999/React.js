import React, { useState } from 'react'

const BgChanger = () => {
  const [bgColor, setBgColor] = useState('white')
  const [textCol, setTextCol] = useState('black')

  const bghandler = () => {
    setBgColor(bgColor === 'white' ? 'black' : 'white')
  }

  return (
    <div className={`bg-${bgColor} text-${textCol} w-screen h-screen flex items-center justify-center`}>
      
      {/* Gradient Border Button */}
      <div className="bg-gradient-to-r from-black to-white p-[2px] rounded">
        <button 
        onClick={bghandler}
          className="bg-white text-black px-6 py-2 rounded w-full h-full transition-all duration-300 hover:bg-gradient-to-r hover:from-black hover:to-white hover:border-black hover:text-white cursor-pointer"
        >
          {bgColor === 'white' ? 'black' : 'white'}
        </button>
      </div>
      
    </div>
  )
}

export default BgChanger
