import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import useHover from '../../utils/useHover'


const DrinkTile = ({ drink }) => {

  //* grabbing properties from drink object and reassigning them to less dumb variable names
  
  const { idDrink: id, strDrink: name, strDrinkThumb: thumbnail, strIngredient1: ingredient } = drink
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
        <div className="img-wrap" ref={hoverRef}>
          <img 
            onClick={() => clickHandler()} 
            className=
              {hovering ? 
                "img-fluid drink-thumb border border-secondary tint" :
                "img-fluid drink-thumb border border-secondary" 
              } src={thumbnail} />
            <div className= {hovering ? "wrap-text" : "wrap-text hidden"}>{ingredient}</div>
        </div>
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