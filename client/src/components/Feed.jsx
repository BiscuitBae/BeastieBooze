import React from 'react'
import { drinks } from '../../dummyData'
import DrinkTile from './DrinkTile'

const Feed = () => {

  console.log('this should be our drinks data: ', drinks);
  // drinks = JSON.parse(drinks);

  const drinkList = drinks.map(drink => {
    return <DrinkTile key={drink.idDrink} drink={drink} />
  })

  return (
    <div>
      <h1>This is our feed</h1>
      {drinkList}

    </div>

  )
}

export default Feed