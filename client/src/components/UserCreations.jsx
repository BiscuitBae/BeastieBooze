import React from 'react'

const UserCreations = ({ creations }) => {

  return (
    <ul>
      {creations.map((e, i) => {
        return (
          <li key={i}>{e.drinkName}</li>
        )
      })}
    </ul>
  )
}

export default UserCreations