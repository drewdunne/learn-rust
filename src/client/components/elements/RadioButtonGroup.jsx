import React from 'react'

const RadioButtonGroup = ({category, setDifficultyHandler, difficulty}) => {
  return (
    <div className="btn-group" role="group" id={"btn-group-"+category} aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={difficulty===0} onChange={() => {setDifficultyHandler(0)}}/>
        <label className="btn btn-outline-danger" htmlFor="btnradio1">Rookie</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={difficulty===1}  onChange={() => {setDifficultyHandler(1)}}/>
        <label className="btn btn-outline-danger" htmlFor="btnradio2">Normal</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" checked={difficulty===2} onChange={() => {setDifficultyHandler(2)}}/>
        <label className="btn btn-outline-danger" htmlFor="btnradio3">Veteran</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" checked={difficulty===3} onChange={() => {setDifficultyHandler(3)}}/>
        <label className="btn btn-outline-danger" htmlFor="btnradio4">Pro</label>
    </div>
  )
}

export default RadioButtonGroup