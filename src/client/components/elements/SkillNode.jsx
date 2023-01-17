import React, {useState} from 'react'

const SkillNode = ({text, id, updateTreeHandler, active}) => {

 const [className, toggleClassActive] = useState(active ? "active" : "");

 function clickHandler() {
  toggleClassActive(className ? "" : "active");
  updateTreeHandler(id)
 }

  return (
    <div className="skill-node-container">
      <div className={"skill-node " + className}  id={id} onClick={clickHandler}>{text}</div>
      <p></p>
    </div>
  )
}

export default SkillNode