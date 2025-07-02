import React from 'react'
import { Header, MainContent, Footer, WelcomeMessage, JsxRules, Greeting, ProductInfo } from './components/index.js'


const App = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
    </div>
  )
}

export default App