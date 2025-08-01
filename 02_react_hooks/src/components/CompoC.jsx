import React, { useContext } from 'react'
import Data from '../DataContext'

const CompoC = () => {
  const name = useContext(Data)
  return <div>My Name: - {name}</div>
}

export default CompoC
