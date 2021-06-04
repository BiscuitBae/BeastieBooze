import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext();

function UserContextProvider({children}) {

  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCreation, setUserCreation] = useState({})
  const [favoriteDrinks, setFavoriteDrinks] = useState([])


  const loginUser = (userData) => {

    axios.get('/routes/users', {params: userData}) 
    .then(({data}) => {
      // console.log('===> userContext user response:', data)
      const { googleId, username, favorites, creations } = data;
      setUserInfo({ googleId, username, favorites, creations })
      setIsLoggedIn(true)
      setFavoriteDrinks(favorites);
    })
    .catch(err => {
      console.log(err)
    })
  }

  const logoutUser = () => {
    setUserInfo({})
    setIsLoggedIn(false)
  }

  // const setUserCreation = ()


  const checkFavorite = (drink) => {
    return userInfo.favorites.includes(drink);
  }


    const toggleFavorite = (drink) => {

    const isFav = favoriteDrinks.includes(drink);

    isFav ? 
    setFavoriteDrinks(prevFavs => prevFavs.filter(item => item.idDrink != drink.idDrink)) :
    setFavoriteDrinks(prevFavs => [...prevFavs, drink]);

    console.log(favoriteDrinks);
  }

  const userProps = {
    userInfo,
    loginUser,
    logoutUser,
    isLoggedIn,
    userCreation,
    setUserCreation,
    checkFavorite,
    toggleFavorite,
    favoriteDrinks
  }

  return (
    <UserContext.Provider value={userProps}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext}