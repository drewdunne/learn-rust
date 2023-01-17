import React from 'react'

//const Section = ({ classNames, content}) => {

const Section = (props) => {
  const {content, className} = props;

  const defaultClass = 'section';
  const fullClass = className ? `${defaultClass} ${className}` : defaultClass

  const containerClass = `container ${className}`

  return (
    <section className={fullClass}>
      <div className={containerClass}>
        {props.children}
      </div>
    </section>
  )
}

export default Section;