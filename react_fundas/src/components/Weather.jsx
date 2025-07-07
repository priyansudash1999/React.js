import React from 'react'

const Weather = ({temperature}) => {
  if(temperature < 15){
    return <h3>It is cold outside!</h3>
  }
  
  else if(15 <= temperature <= 25){
    return <h3>It is nice outside</h3>
  }

  else{
    return <h3>It is hot outside</h3>
  }
}

export default Weather