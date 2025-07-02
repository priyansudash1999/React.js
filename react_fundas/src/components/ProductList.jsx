import React from 'react'

const ProductList = () => {
  const products = [
    {id:1, name: "Phone", price: "$699"},
    {id: 2, name: "Laptop", price: "$1200"},
    {id: 3, name: "Headphone", price: "$199"}
  ]
  return (
    <div>
      {products.map(({id, name, price}) => (
        <ul key={id}>
          <li>{name} : {price}</li>
        </ul>
      ))}
    </div>
  )
}

export default ProductList