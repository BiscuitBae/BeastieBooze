//SearchFeed Component to render beneath Search Bar within Search.jsx
import React, { useEffect, useContext } from 'react'
import DrinkTile from '../components/DrinkTile'
import { BoozeContext } from '../boozeContext'
import { Link } from 'react-router-dom'

const SearchFeed = () => { 

  const { searchDrinks, searchResults } = useContext(BoozeContext);


  console.log(searchResults)

  let drinkResults;

  //Rendering results or No Results depending on results of query
  
  if(searchResults !== "404"){
    drinkResults = searchResults.map(drink => {
    return <DrinkTile key={drink.idDrink} drink={drink} />
  })
  } else {
     return (
       <div>
        <h4 className="sub-heading"> Sorry We Found No Results </h4>
        <Link to={`/create`}>
          <button className="btn btn-info" type="submit">Create One?</button>
        </Link>
      </div>
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