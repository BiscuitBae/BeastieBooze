import React from 'react'
import { Link } from 'react-router-dom'


const DrinkTile = ({ drink }) => {

  //* grabbing properties from drink object and reassigning them to less dumb variable names
  const { idDrink: id, strDrink: name, strDrinkThumb: thumbnail } = drink

  return (
    <div className="col-md-3">
      <div className="drink-tile">
      <img className="img-fluid drink-thumb border border-secondary" src={thumbnail} />
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