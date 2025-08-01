import React from 'react'
import CompoC from './CompoC'

const CompoB = ({name}) => {
  return (
    <div>
      <CompoC name={name}/>
    </div>
  )
}

export default CompoB