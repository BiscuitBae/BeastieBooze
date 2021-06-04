import React from 'react'

const UserCreations = ({ creations }) => {

  return (
    <ul>
      {creations.map(e => {
        return (
          <li key={e.id}>{e.name}</li>
        )
      })}
    </ul>
  )
}

export default UserCreations