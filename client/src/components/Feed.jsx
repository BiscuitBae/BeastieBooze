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
    <div>
      <h1>This is our drinks feed</h1>
      {drinkList}
    </div>

  )
}

export default Feed