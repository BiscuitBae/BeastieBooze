//Profile component to connect. An option if a user registers to be a member of the site.

import React, { useContext } from 'react'

import { UserContext } from '../userContext'


//user profile renders specific user's profile IF they are logged on.
//change schema to import user drinks and have the custom drinks hold who made the drink.
//The profile page tracks users creations and their favorites.

const Profile = () => {
  
  const { userInfo, isLoggedIn } = useContext(UserContext)
  const { username, favorites } = userInfo

  return (
  <>
  <h1 className='page-heading'>{`Welcome Back ${username}`}</h1>
  <div>
  <h5 className='sub-heading'> Creations </h5>
  </div>
  <div>
    <h5 className='sub-heading'> Favorites </h5>
  </div>
  </>
  )

}

export default Profile