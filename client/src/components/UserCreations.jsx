import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BoozeContext } from '../boozeContext'

const UserCreations = ({ creations }) => {

const { makeADrink } = useContext(BoozeContext)
  return (
    <ul>
        {creations.map((drink, i) => {
          // drink = makeADrink(drink)
          console.log(drink.ingredients)
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

