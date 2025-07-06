import React from 'react'
import { Header, MainContent, Footer, WelcomeMessage, JsxRules, Greeting, ProductInfo, UserList, ProductList, Person, Product } from './components/index.js'


const App = () => {
  return (
    <div>
      <Person name={"Priyansu"} age={27}/>
      <Product name={"Laptop"} price={300000}/>
    </div>
  )
}

export default App