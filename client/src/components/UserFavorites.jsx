import React from 'react'
import { Link } from 'react-router-dom'

const UserFavorites = ({ favorites }) => {

  console.log(favorites)


  return (
    <ul className="circle-bullets">
      {favorites.map((drink, i) => {
       return drink.idDrink ?
         (
          <Link to={{
            pathname: `/drink/${drink.idDrink}`,
            state: { drink }
            }}>
            <li key={i} className="favorite">{drink.strDrink}</li>
          </Link>
        )
        :
        (
          <Link to={{
            pathname: `/custom/${drink.drinkName}`,
            state: { drink }
            }}>
            <li key={i} className="favorite">{drink.drinkName}</li>
          </Link>
        )
      })}
    </ul>
  )
}

export default UserFavorites