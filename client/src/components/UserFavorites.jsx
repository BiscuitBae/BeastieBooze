import React from 'react'

const UserFavorites = ({ favorites }) => {

  console.log(favorites)

//db changes related to favorites
  const whichDb = (e) => {
    let name = e.strDrink ? e.strDrink : e.drinkName
    return name
  }

  return (
    <ul>
      {favorites.map((e, i) => {
        return (
          <li key={i}>{whichDb(e)}</li>
        )
      })}
    </ul>
  )
}

export default UserFavorites