import React from 'react'

const UserFavorites = ({ favorites }) => {

  return (
    <ul>
      {favorites.map(e => {
        return (
          <li key={e.id}>{e.name}</li>
        )
      })}
    </ul>
  )
}

export default UserFavorites