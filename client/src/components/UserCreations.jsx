import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BoozeContext } from '../boozeContext'

const UserCreations = ({ creations }) => {

const { makeADrink } = useContext(BoozeContext)
  return (
    <ul>
        {creations.map((drink, i) => {
          return (
            <div key={i}>
            <Link to={{
              pathname: `/custom/${drink.drinkName || drink.name}`,
              state: { drink }
            }}>
              <li>{drink.drinkName || drink.name}</li>
            </Link>
            </div>
          )
        })}
    </ul>
  )
}

export default UserCreations

