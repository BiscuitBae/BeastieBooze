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

      //lets set favorites by name
      favorites.forEach(drink => {
        // let key = drink.strDrink ? drink.strDrink : drink.drinkName;
        setFavoriteDrinks(prevFavs => [...prevFavs, drink.favId])
      })
    })
    .catch(err => console.log(err));
  };

  const logoutUser = () => {
    setUserInfo({});
    setIsLoggedIn(false);
  };



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


 


  const toggleFavorite = (drink) => {
    
    drink.favId = drink._id || drink.idDrink
    
    // let key = drink.strDrink ? drink.strDrink : drink.drinkName;
    
    if(favoriteDrinks.includes(drink.favId)){
      alert('You Have Already Favorited This Item')
    } else {
      
    setFavoriteDrinks(prevFavs => [...prevFavs, drink.favId])
    const { googleId } = userInfo 
    
    
    
    axios.patch(`/routes/users/favorites/:id`, { id: googleId, favorites: drink })  
    .then(({ data }) => {
      setUserInfo(data)
    }).catch((err) => console.error(err))
  }
}

const removeFavorite = (drink) => {
//removes favorite
  console.log('MADE IT TO REMOVE FAVORITES', drink)
  const { favId } = drink 
  const { googleId } = userInfo 

  axios.patch(`/routes/users/favorites/delete/:favId`, { favId, googleId } )
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
    userCreations,
    setUserCreations,
    addCreation,
    removeFavorite,
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