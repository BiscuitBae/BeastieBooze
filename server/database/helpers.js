const { User, Drink } = require('./Models');

// for the oauth to work need 2 functions here
// getUser and createUser
// needs to be exported for use in passport-setup.js

// getUser should take a userId and return the found user, empty array or null if not found?
const getUser = async (id) => {
  try {
    const user = await User.find({googleId: id});
    return user;
  } catch {
    console.log('getUser failed', err)
  }
}

// createUser should take a user object ({ googleId, username }) which should make a new user entry in the db
const createUser = async (userObj) => {
  
  console.log('helper function user data: ', userObj)
  const {googleId, givenName: username} = userObj;


  try {
    const newUser = await User.create({googleId, username});
    return newUser;
  } catch {
    console.log('createUser failed', err);
  }
}

module.exports = {
  getUser,
  createUser
}