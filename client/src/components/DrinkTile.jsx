import React from 'react'
import { Link } from 'react-router-dom'


const DrinkTile = ({ drink }) => {

  //* grabbing properties from drink object and reassigning them to less dumb variable names
  const { idDrink: id, strDrink: name, strDrinkThumb: thumbnail } = drink

  return (
    <div className="drink-tile">
      <img src={thumbnail} />
      <h3>
        <Link to={`/drink/${id}`}>
        {name}
        </Link>
        </h3>
      <hr />
    </div>
  )


}

export default DrinkTile