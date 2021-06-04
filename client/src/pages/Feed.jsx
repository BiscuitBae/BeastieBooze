import React, { useEffect, useContext } from 'react'
import DrinkTile from '../components/DrinkTile'
import {BoozeContext} from '../boozeContext'
import {UserContext} from '../userContext'

const Feed = () => {
// pull drinksFeed (current assortment of drinks) and random10 function from BoozeContext
const {isLoggedIn, userInfo} = useContext(UserContext) 
const {drinksFeed, random10} = useContext(BoozeContext)

  // when component loads, call random10 to populate drinksFeed with 10 new, random drinks from api
  useEffect(() => {
    random10()
    console.log('userInfo: ', userInfo, 'Logged In: ', isLoggedIn)
  }, [])

  let dranks = drinksFeed.slice(1);

  const drinkList = dranks.map(drink => {
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