import React from 'react'
import { Link } from 'react-router-dom'

const UserCreations = ({ creations }) => {
console.log(creations)
  return (
    <ul>
        {creations.map((drink, i) => {
          return (
            <Link to={{
              pathname: `/custom/${drink[i]}`,
              state: { drink }
            }}>
              <li key={i}>{drink.drinkName}</li>
            </Link>
          )
        })}
    </ul>
  )
}

export default UserCreations

