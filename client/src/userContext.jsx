import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext();

function UserContextProvider({children}) {

  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCreations, setUserCreations] = useState([])
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

  // const checkCreation = () => {
  //   return userInfo.creations.includes(drink);
  // }

  const addCreation = (creationObj) => {
    //we have a creation object and we want to send a request 
    //to the database and add the creation to the database on 
    //submit.
    console.log(userInfo)
    console.log('HELLO FROM USER CREATION')
    console.log('THIS IS CREATION OBJ', creationObj)

    // we need to patch this into user db
    axios.put('/routes/users', {params: { userInfo, creationObj }})  
    .then(() => {
      console.log('USER INFORMATION UPDATED')
    }).catch((err) => console.error(err))

  }


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
    userCreations,
    setUserCreations,
    addCreation,
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