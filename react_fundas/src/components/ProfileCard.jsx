import React from 'react'
import IconComponent from './IconComponent'

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "10px",
    color: "black"
  }
  return (
    <div style={styles}>
      <IconComponent />
      <h3>Hello I am John</h3>
    </div>
  )
}

export default ProfileCard