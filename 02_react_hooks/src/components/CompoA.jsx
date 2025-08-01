import React from 'react'
import CompoB from './CompoB'

const CompoA = ({name}) => {
  return (
    <div>
      <CompoB name= {name}/>
    </div>
  )
}

export default CompoA