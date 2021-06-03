import React from 'react'
import { Link } from 'react-router-dom'

import ImgWrapper from './ImgWrapper'


const DrinkTile = ({ drink }) => {

  // grabbing properties from drink object and reassigning them to less dumb variable names
  const { idDrink: id, strDrink: name } = drink

  return (
    <div className="col-md-3">
      <div className="drink-tile">
        <Link to={`/drink/${id}`}>
        <ImgWrapper drink={ drink } />
        </Link>
      </div>
    </div>
  )


}

export default DrinkTile