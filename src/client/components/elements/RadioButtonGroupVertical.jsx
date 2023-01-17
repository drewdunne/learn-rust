import React from 'react'


const RadioButtonGroupVertical = ({titles, entries, setNavigationHandler}) => {

  const entryElements = [];
  entries.forEach((array, index) => {
      entryElements.push([])
      array.forEach((entry, j) => {
        entryElements[index].push(<button 
          type="button" 
          className="btn btn-navigation"
          onClick={() => setNavigationHandler(entries[index][j], titles[index])}
          >
            {entry}
        </button>);
      })
    }
  )

  const output = []
  for(let i = 0; i < titles.length; i++) {
    output.push(
    <div className="nav-group">
      <div id="left-nav-subtitle">{titles[i]}</div>
      <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
        {entryElements[i]}
      </div>
    </div>
    )
  }


  return (
    output
  )
}

export default RadioButtonGroupVertical