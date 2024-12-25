import React from 'react'
import buttonstyles from '../css/button.module.css'

const Button = ({text}) => {
  return (
    <button className={buttonstyles.btn}>{text}</button>
  )
}

export default Button