import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import useHover from '../../utils/useHover'


const DrinkTile = ({ drink }) => {

  //* grabbing properties from drink object and reassigning them to less dumb variable names
  
  const { idDrink: id, strDrink: name, strDrinkThumb: thumbnail } = drink
  const clickHandler = () => {
    return (
      <Link to={`/drink/${id}`}></Link>
      )
    }

  //create hover state
  const [hoverRef, hovering] = useHover();


  return (
    <div className="col-md-3">
      <div className="drink-tile">
      <img 
        onClick={() => clickHandler()} 
        ref={hoverRef}
        className="img-fluid drink-thumb border border-secondary" src={ hovering ? '' : thumbnail} />
      <h3>
        <Link to={`/drink/${id}`}>
        {name}
        </Link>
        </h3>
        </div>
    </div>
  )


}

export default DrinkTile