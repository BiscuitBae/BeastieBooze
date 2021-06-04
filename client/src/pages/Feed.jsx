import React, { useEffect, useContext } from 'react'
import DrinkTile from '../components/DrinkTile'
import {BoozeContext} from '../boozeContext'
import {UserContext} from '../userContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Feed = () => {
// pull drinksFeed (current assortment of drinks) and random10 function from BoozeContext
const {isLoggedIn, userInfo, favoriteDrinks, verifyAge, isLegal} = useContext(UserContext);
const {drinksFeed, random10, mocktail10} = useContext(BoozeContext);

  // when component loads, call random10 to populate drinksFeed with 10 new, random drinks from api
  useEffect(() => {
    verifyAge()
  }, [])

  useEffect(() => {
      if(!isLegal){
        mocktail10();
      } else {
        random10();
      }
  }, [isLegal])

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

export default Feed;