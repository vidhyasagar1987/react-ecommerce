import React from 'react'

const ButtonStyle = (props) => {
  return (
    <button className={`button ${props.className}`} onClick={props.onClick}>
    <span className="button-content">{props.children} </span>
  </button>
  )
}

export default ButtonStyle