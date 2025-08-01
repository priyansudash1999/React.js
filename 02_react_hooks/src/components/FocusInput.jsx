import React from 'react'

const FocusInput = () => {

  // eslint-disable-next-line no-undef
  const input = React.useRef(null)
  const handleFocus = () => {
    input.current.focus()
  }

  return (
    <div>
      <input type="text" ref={input} placeholder='Click the button to focus'/>
      <button onClick={() => handleFocus()}>Focus</button>
    </div>
  )
}

export default FocusInput