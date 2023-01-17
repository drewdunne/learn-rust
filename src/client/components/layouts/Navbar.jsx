import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Navbar = (props) => {

  const {className} = props;
  const defaultClass = 'navbar'
  const fullClass = className ? `${defaultClass} ${className}` : defaultClass
  
  return (
    <div className={fullClass}>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Navbar