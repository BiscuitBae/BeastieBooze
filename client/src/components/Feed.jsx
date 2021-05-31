import React, { useState, useEffect } from 'react'
import { drinks } from '../../dummyData'
import DrinkTile from './DrinkTile'
import axios from 'axios'

const Feed = () => {

  //* map over dummy drinks, or a random 10 api call, and pass each entry to the 
  //* drinkTile component

  const [apiDrinks, setApiDrinks] = useState([]);

  useEffect(async() => {
    const results = await axios.get('/feed')
    console.log(results)
    setApiDrinks(results)
  }, [])

  
  
  const drinkList = apiDrinks.map(drink => {
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