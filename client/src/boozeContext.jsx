import React, {useState, useEffect} from 'react'
import axios from 'axios'

const BoozeContext = React.createContext();

function BoozeContextProvider({children}) {

  const [drinksFeed, setDrinksFeed] = useState([]);
  const [aDrink, setADrink] = useState({});
  const [customDrinks, setCustomDrinks] = useState([]);


  const random10 = () => {
    axios.get('/routes/feed')
      .then(({data}) => {
        setDrinksFeed(data)
      })
      .catch(err => console.log('couldnt get drinks from server: ', err))
  }

  const renderDrink = (id) => {
    const displayDrink = drinksFeed.find(drink => drink.idDrink == id)
    setADrink(displayDrink)
  }

  const makeADrink = (userInput) => {
    console.log("we gotta do something with this drank data: ", userInput);
  }



  return (
    <BoozeContext.Provider value={{drinksFeed, random10, renderDrink, aDrink, makeADrink}}>
      {children}
    </BoozeContext.Provider>
  )

}

export {BoozeContextProvider, BoozeContext}