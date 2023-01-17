
/**
 * SubArticles are designed to be used in Sections
 */
const Row = ({orientation, content, title, image, alt, link}) => {

  if(orientation==='left') {

  }
  else {
    return (
      <div className='row'>
        <div className="container image">
          <a href={link}>
            <img src={image} className="image" alt={alt}/>
          </a>
        </div>
        <div className="container content">
          <h3>{title}</h3>
          <h4 className="content">{content}</h4>
        </div>
      </div>);
  }

  return (
    <div className='row'>
      <div className="container content">
        <h3>{title}</h3>
        <h4 className="content">{content}</h4>
      </div>
      <div className="container image">
        <a href={link}>
          <img src={image} className="image" alt={alt}/>
        </a>
      </div>
  </div>);
}

export default Row;