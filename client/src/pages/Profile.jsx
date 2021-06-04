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


  let userCreations = [
    {id: 4, name: 'tequila'},
    {id: 5, name: 'whiskey'},
    {id: 6, name: 'jaegerbomb'}
  ]
  let userFavorites = [
    {id: 1, name: 'hamburger'},
    {id: 2, name: 'cheese'},
    {id: 3, name: 'lettuce'}]
 

  return (
  <>
    <h1 className='page-heading'>{`Welcome Back ${username}`}</h1>
    <div>
      <h5 className='sub-heading'> Creations </h5>
      <UserCreations creations={creations} />
    </div>
    <div>
      <h5 className='sub-heading'> Favorites </h5>
      <UserFavorites favorites={userFavorites} />
    </div>
  </>
  )

}

export default Profile