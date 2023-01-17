import React from 'react'

const Button = ({text, href, className}) => {

  const defaultClass = 'button'
  const fullClass = className ? `${defaultClass} ${className}` : defaultClass;

  return (
    <div className={fullClass}><a href={href}>{text}</a></div>
  )
}

export default Button