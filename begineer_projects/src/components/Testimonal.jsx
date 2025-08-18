import React, { useState } from 'react'

const Testimonal = () => {

  const [curInd, setCurrInd] = useState(0)
  const testimonials = [
  {
    name: "Aarav Gupta",
    message: "Amazing quality! The product looked exactly like the pictures. Delivery was super fast too.",
  },
  {
    name: "Sneha Patel",
    message: "I was skeptical at first, but the customer support guided me so well. Very trustworthy website.",
  },
  {
    name: "Rohan Kumar",
    message: "Great shopping experience. Easy checkout, and the discounts are real! Will buy again.",
  },
  {
    name: "Meera Nair",
    message: "Loved the packaging and fast delivery. The product quality is worth every penny.",
  },
  {
    name: "Vikram Singh",
    message: "The best part is the variety – I always find something new. Highly recommended for online shopping.",
  }
]
  const getPrev = () => {
    setCurrInd((curInd + testimonials.length - 1)%testimonials.length)
  }

  const getNext = () => {
    setCurrInd((curInd + 1)%testimonials.length)
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <div className='bg-gray-600 p-3 rounded-2xl'>
        {testimonials[curInd].message}
      </div>

      <div className='m-4 p-3 border-1 rounded-xl '>
        {testimonials[curInd].name}
      </div>

      <div className='flex gap-8'>
        <button onClick={getPrev} className='border-1 px-4 py-1 rounded-full cursor-pointer hover:bg-gradient-to-l hover:from-black hover:to-white  '>Prev</button>
        <button onClick={getNext} className='border-1 px-4 py-1 rounded-full cursor-pointer hover:bg-gradient-to-l hover:from-black hover:to-white'>Next</button>
      </div>
    </div>
  )
}

export default Testimonal