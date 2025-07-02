import React from 'react'
import { Header, MainContent, Footer, WelcomeMessage, JsxRules, Greeting, ProductInfo, UserList, ProductList } from './components/index.js'


const App = () => {
  return (
    <div>
      <UserList />
      <ProductList />
    </div>
  )
}

export default App