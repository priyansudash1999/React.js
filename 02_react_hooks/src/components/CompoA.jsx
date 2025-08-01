import React from 'react'
import CompoB from './CompoB'

// const CompoA = ({name}) => {
//   return (
//     <div>
//       <CompoB name= {name}/>
//     </div>
//   )
// }

const CompoA = () => {
  return (
    <div>
      <CompoB />
    </div>
  )
}

export default CompoA