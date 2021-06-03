import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = React.createContext();

function UserContextProvider({children}) {
  const [userInfo, setUserInfo] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const LoginUser = (userData) => {

    // await axios.get()

    setIsLoggedIn(true);
  }

  const userProps = {
    userInfo,
    LoginUser,
    isLoggedIn,
  }

  return (
    <UserContext.Provider value={userProps}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext}