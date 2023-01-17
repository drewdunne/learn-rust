import React from 'react'

const NavbarMenu = (props) => {

  const defaultClass = 'navbar-menu'
  const fullClass = props.className ? `${defaultClass} ${props.className}` : defaultClass;

  return (
    <>
      <div className={fullClass}>
        {props.children}
      </div>
    </>
  )
}

export default NavbarMenu