import React, { useState } from 'react'

const ShoppingList = () => {

  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !quantity) return

    const newItem = {
      name,
      quantity: parseInt(quantity)
    }

    setItems(prev => [...prev, newItem])
    setName("")
    setQuantity("")
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Item' value={name} onChange={e => setName(e.target.value)}/>
        <input type="number" placeholder='Item Quantity' value={quantity} onChange={e => setQuantity(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>

      <div>
        <ul>
          {items.map((i, ind) => (
            <li key={ind}>
              {i.name} = {i.quantity}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default ShoppingList