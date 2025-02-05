import React from 'react'


export const TextInput = (props) => {
  

  return (
  <div className="text-input" tabindex="0">
    <label htmlFor="name-input">What´s your name: </label>
    <input 
      id="name-input"
      type="text"
      value={props.name}
      onChange={props.onNameChange}
      />
      </div>    
  )
}