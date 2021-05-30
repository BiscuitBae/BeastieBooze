import React from 'react'
import { drinks } from '../../dummyData'
import DrinkTile from './DrinkTile'

const Feed = () => {

  //* map over dummy drinks, or a random 10 api call, and pass each entry to the 
  //* drinkTile component
  
  const drinkList = drinks.map(drink => {
    return <DrinkTile key={drink.idDrink} drink={drink} />
  })

  return (
    <div className="container">
      <h1 className="page-heading">Featured Drinks</h1>
      <div className="row">
      {drinkList}
      </div>
    </div>

  )
}

export default Feed