import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext();

function UserContextProvider({children}) {

  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const loginUser = (userData) => {

    axios.get('/routes/users', {params: userData}) 
    .then(({data}) => {
      // console.log('===> userContext user response:', data)
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

  const userProps = {
    userInfo,
    loginUser,
    logoutUser,
    isLoggedIn,
  }

  return (
    <UserContext.Provider value={userProps}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext}