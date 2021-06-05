//Profile component to connect. An option if a user registers to be a member of the site.

import React, { useContext } from 'react'

import UserCreations from '../components/UserCreations'
import UserFavorites from '../components/UserFavorites' 

import { UserContext } from '../userContext'


//user profile renders specific user's profile IF they are logged on.
//change schema to import user drinks and have the custom drinks hold who made the drink.
//The profile page tracks users creations and their favorites.

const Profile = () => {
  
  const { userInfo, isLoggedIn } = useContext(UserContext)
  const { username, favorites, creations } = userInfo


  //dummy variables to start of with


  return (
  <div className ='container'>
    <h1 className='page-heading'>{`Welcome Back ${username}`}</h1>
    <div>
      <h3 className='profile-heading'> Creations </h3>
      <UserCreations creations={creations} />
    </div>
    <div>
      <h3 className='profile-heading'> Favorites </h3>
      <UserFavorites favorites={favorites} />
    </div>
  </div>
  )

}

export default Profile