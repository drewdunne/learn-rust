import React from 'react'
import SkillNode from './SkillNode'
import Xarrow from "react-xarrows"

const SkillTree = ({data, progressData, category, difficulty, handleClickNode}) => {

    const nodes = []
    const ids = []

    for (let i = 0; i < data.length; i++) {
        const id = category+"-"+difficulty+"-"+i
        nodes.push(<SkillNode key={id} text={data[i]} id={id} active={progressData[id]===true} updateTreeHandler={handleClickNode}/>);
        ids.push(id);
        if(i > 0) {
            nodes.push(<Xarrow start={ids[i-1]} end={ids[i]} showHead={false} color={"#7ea356"} strokeWidth={2} key={id+"arrow"}/>)
        }
    }

  return (
      nodes
  )
}

export default SkillTree