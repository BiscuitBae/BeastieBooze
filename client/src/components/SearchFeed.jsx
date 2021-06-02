//SearchFeed Component to render beneath Search Bar within Search.jsx
import React, { useEffect, useContext } from 'react'
import DrinkTile from '../components/DrinkTile'
import {BoozeContext} from '../boozeContext'

const SearchFeed = () => { 

  const { searchDrinks, searchResults } = useContext(BoozeContext);


  console.log(searchResults)

  let drinkResults;

  if(searchResults !== "404"){
    console.log(true)
    drinkResults = searchResults.map(drink => {
    return <DrinkTile key={drink.idDrink} drink={drink} />
  })
  } else {
    console.log(true)
     return (
      <h2 className="sub-heading"> Sorry We Found No Results </h2>
    ) 
  } 

  return (
  <div className="container">
    <div className="row">
    {drinkResults}
    </div>
  </div>
)
}

export default SearchFeed