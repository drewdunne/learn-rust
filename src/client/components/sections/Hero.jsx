import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Hero = (props) => {
  const {title, subtitle, className, alt, src} = props;

  const fullClassName = className ? 'hero ' + className : 'hero'

  const jsxElements = (() => {
    return (
      <section className={fullClassName} key={uuidv4}>
        <div className="container title">
          <h1 className="hero title">{title}</h1>
          <div className="hero subtitle">{subtitle}</div>
          {props.children}
        </div>
        <div className="container hero--image">
          <img src={src} alt={alt}></img>
        </div>
      </section>
    )
  })()


  return (
    <>
      {jsxElements}
    </>
  )
}

export default Hero;