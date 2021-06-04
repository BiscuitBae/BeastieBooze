import React from 'react'

const UserCreations = ({ creations }) => {

  return (
    <ul>
      {creations.map((e, i) => {
        return (
          <li>{e.name}</li>
        )
      })}
    </ul>
  )
}

export default UserCreations