import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const UserContext = createContext();

function UserContextProvider({children}) {

  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLegal, setIsLegal] = useState(null);


  const loginUser = (userData) => {

    axios.get('/routes/users', {params: userData}) 
    .then(({data}) => {
      const { googleId, username, favorites } = data;
      setUserInfo({ googleId, username, favorites })
      setIsLoggedIn(true)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const logoutUser = () => {
    setUserInfo({})
    setIsLoggedIn(false)
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
    isLegal,
    verifyAge
  }

  return (
    <UserContext.Provider value={userProps}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext}