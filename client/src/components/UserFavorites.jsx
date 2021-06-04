import React from 'react'

const UserFavorites = ({ favorites }) => {

  return (
    <ul>
      {favorites.map((e, i) => {
        return (
          <li>{e.name}</li>
        )
      })}
    </ul>
  )
}

export default UserFavorites