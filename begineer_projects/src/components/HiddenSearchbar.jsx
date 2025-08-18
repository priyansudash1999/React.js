import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa' 

const HiddenSearchbar = () => {

  const [showInput, setShowInput] = useState(false)
  const [bgColor, setBgColor] = useState('white')


  const handleClick = (e) => {
    setBgColor('black')
    setShowInput(false)
  }

  return (
    <section className={`bg-${bgColor} w-screen h-screen flex items-center justify-center`} onClick={handleClick}>
      {
        showInput ? (
          <input type="text" placeholder='search...' />
        ) : (
          <FaSearch onClick={() => setShowInput(showInput)}/>
        )
      }
    </section>
  )
}

export default HiddenSearchbar