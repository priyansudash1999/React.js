import React from 'react'

const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availabilty: "In stock"
  }
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>${product.price}</h2>
      <p>{product.availabilty}</p>
    </div>
  )
}

export default ProductInfo