import React from 'react'
import { Header, MainContent, Footer, WelcomeMessage, JsxRules, Greeting, ProductInfo, UserList, ProductList, Person, Product, Weather, UserStatus, Greetingg } from './components/index.js'


const App = () => {
  return (
    <div>
      <Weather temperature={23}/>
      <UserStatus isAdmin={false} loggedIn={true}/>
      <Greetingg timeOfDay={"Morning"}/>
    </div>
  )
}

export default App