import React from 'react'

import gitHubIcon from '../../assets/images/github.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import globeIcon from '../../assets/images/globe.png'

const Teammate = ({photo, name, gitHubLink, linkedinLink, description, portfolioLink, title}) => {
  const alt = `photo of ${name}`

  const primaryIcon = (()=> {
    if(gitHubLink) {
      return (
      <a href={gitHubLink}>
      < img src={gitHubIcon} className="icon icon-small" alt="github" />
      </a>
      )
    }
    if(portfolioLink) {
      return (
        <a href={portfolioLink}>
        < img src={globeIcon} className="icon icon-small" alt="github" />
        </a>
      )
    }
  })()


  return (
    <div className="hardworker">
      <a href={linkedinLink}> <img src={photo} className="photo" alt={alt}/> </a>
      <h2 className='subtitle--white'>{name}</h2>
      <div className="title"><em>{title}</em></div>
      <div className="description">{description}</div>
      <div className="sites">
        {primaryIcon}
        <a href={linkedinLink}>
          <img src={linkedinIcon} className="icon icon-small" alt="linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Teammate;