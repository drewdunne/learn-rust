import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const NavbarItem = ({src, alt, className, text, href}) => {

  const defaultClass = 'navbar-item'
  const fullClass = className ? `${defaultClass} ${className}` : defaultClass;


  if(src) {
    return (
      <img src={src} alt={alt} className={fullClass} href={href}></img>
    )
  }
  else {
    return (
      <div className={fullClass} key={uuidv4()}><a href={href}>{text}</a></div>
    )
  }
}

export default NavbarItem