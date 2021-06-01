import React, {useState, useEffect} from 'react'
import axios from 'axios'

const BoozeContext = React.createContext();

function BoozeContextProvider({children}) {

  const [drinks, setDrinks] = useState([]);
  const [aDrink, setADrink] = useState({})

  const random10 = () => {
    axios.get('/routes/feed')
      .then(({data}) => {
        setDrinks(data)
      })
      .catch(err => console.log('couldnt get drinks from server: ', err))
  }

  const renderDrink = (id) => {
    console.log('id in Provider: ', id)
    const displayDrink = drinks.find(drink => drink.idDrink == id)
    console.log(displayDrink);
    setADrink(displayDrink)
  }

  return (
    <BoozeContext.Provider value={{drinks, random10, renderDrink, aDrink}}>
      {children}
    </BoozeContext.Provider>
  )

}

export {BoozeContextProvider, BoozeContext}