import React, { useEffect, useContext } from 'react'
import DrinkTile from '../components/DrinkTile'
import {BoozeContext} from '../boozeContext'

const Feed = () => {

  const {drinksFeed, random10} = useContext(BoozeContext)
  
  useEffect(() => {
    random10()
  }, [])

  const drinkList = drinksFeed.map(drink => {
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