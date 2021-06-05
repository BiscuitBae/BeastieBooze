import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const UserContext = createContext();

function UserContextProvider({children}) {

  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCreations, setUserCreations] = useState([])
  const [favoriteDrinks, setFavoriteDrinks] = useState([])
  const [isLegal, setIsLegal] = useState(null);

  const loginUser = (userData) => {

    axios.get('/routes/users', {params: userData})
    .then(({data}) => {
      // console.log('===> userContext user response:', data)
      const { googleId, username, favorites, creations } = data;
      setUserInfo({ googleId, username, favorites, creations })
      setIsLoggedIn(true)
      setFavoriteDrinks(favorites);
    })
    .catch(err => console.log(err));
  };

  const logoutUser = () => {
    setUserInfo({});
    setIsLoggedIn(false);
  };

  // const checkCreation = () => {
  //   return userInfo.creations.includes(drink);
  // }

  const addCreation = (creationObj) => {
    //we have a creation object and we want to send a request 
    //to the database and add the creation to the database on 
    //submit.

    const { googleId } = userInfo 

    // we need to patch this into user db
    axios.patch(`/routes/users/custom/:id`, { id: googleId, creations: creationObj })  
    .then(({ data }) => {
      setUserInfo(data)
    }).catch((err) => console.error(err))

  }


  const checkFavorite = (drink) => {
    return userInfo.favorites.includes(drink);
  };

  const toggleFavorite = (drink) => {
    // const isFav = favoriteDrinks.includes(drink);
    // console.log('These Are Favorite Drinks ', favoriteDrinks, 'THis is this Drink', drink)
    // console.log(userInfo)

    // isFav ?
    //   setFavoriteDrinks(prevFavs => prevFavs.filter(item => item.idDrink != drink.idDrink)) :
    //   setFavoriteDrinks(prevFavs => [...prevFavs, drink]);


    const { googleId } = userInfo 

    axios.patch(`/routes/users/favorites/:id`, { id: googleId, favorites: drink })  
    .then(({ data }) => {
      setUserInfo(data)
    }).catch((err) => console.error(err))
  }

 


  const verifyAge = () => {
    Swal.fire({
      title: 'Are you 21 or older?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes, I am <i class="fa fa-arrow-right"></i>`,
      denyButtonText: `No, I am underage`,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        Swal.fire('Saved!', '', 'success');
        setIsLegal(true);
      } else {
        Swal.fire('Changes are not saved', '', 'info');
        setIsLegal(false);
      }
    });
  };

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
    favoriteDrinks,
    isLegal,
    verifyAge
  }

  return (
    <UserContext.Provider value={userProps}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext};