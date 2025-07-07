import React from 'react'
import { DiAndroid } from "react-icons/di";

const Greetingg = ({timeOfDay}) => {
  return (
    <>
    {timeOfDay === "Morning" ? <h3>It is morning</h3> : <h3>It is afternoon</h3>}
    </>
  )
  
}

export default Greetingg