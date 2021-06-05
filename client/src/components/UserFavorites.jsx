import React from 'react'
import { Link } from 'react-router-dom'

const UserFavorites = ({ favorites }) => {

  console.log(favorites)

//db changes related to favorites
  const whichDb = (e) => {
    let name = e.strDrink ? e.strDrink : e.drinkName
    return name
  }

  return (
    <ul>
      {favorites.map((drink, i) => {
        return (
          <Link to={{
            pathname: `/drink/${drink.idDrink}`,
            state: { drink }
            }}>
            <li key={i}>{whichDb(drink)}</li>
          </Link>
        )
      })}
    </ul>
  )
}

export default UserFavorites