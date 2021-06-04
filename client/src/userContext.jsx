import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const UserContext = createContext();

function UserContextProvider({children}) {

  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favoriteDrinks, setFavoriteDrinks] = useState([])
  const [isLegal, setIsLegal] = useState(null);

  const loginUser = (userData) => {

    axios.get('/routes/users', {params: userData})
    .then(({data}) => {
      const { googleId, username, favorites } = data;
      setUserInfo({ googleId, username, favorites });
      setIsLoggedIn(true);
      setFavoriteDrinks(favorites);
      console.log('in loginUser userContext, userInfo is: ', userInfo);
    })
    .catch(err => console.log(err));
  };

  const logoutUser = () => {
    setUserInfo({});
    setIsLoggedIn(false);
  };

  const checkFavorite = (drink) => {
    return userInfo.favorites.includes(drink);
  };

  const toggleFavorite = (drink) => {
    const isFav = favoriteDrinks.includes(drink);

    isFav ?
      setFavoriteDrinks(prevFavs => prevFavs.filter(item => item.idDrink != drink.idDrink)) :
      setFavoriteDrinks(prevFavs => [...prevFavs, drink]);
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
        Swal.fire('You have access to alcoholic and non-alcoholic beverages.', '', 'success');
        setIsLegal(true);
      } else {
        Swal.fire('You have access to non-alcoholic beverages.', '', 'info');
        setIsLegal(false);
      }
    });
  };

  const userProps = {
    userInfo,
    loginUser,
    logoutUser,
    isLoggedIn,
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