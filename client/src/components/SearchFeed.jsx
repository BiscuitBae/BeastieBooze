//SearchFeed Component to render beneath Search Bar within Search.jsx
import React, { useEffect, useContext } from 'react'
import DrinkTile from '../components/DrinkTile'
import {BoozeContext} from '../boozeContext'

const SearchFeed = () => { 

  const { searchDrinks, searchResults } = useContext(BoozeContext);

  const drinkResults = searchResults.map(drink => {
    return <DrinkTile key={drink.idDrink} drink={drink} />
  })
  console.log(drinkResults)

  return (
  <div className="container">
    <div className="row">
    {drinkResults}
    </div>
  </div>
)
}

export default SearchFeed