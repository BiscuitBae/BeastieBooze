const { User, Drink } = require('./Models');

// getUser should take a userId and return the found user, empty array or null if not found?
const getUser = async (id) => {
  try {
    const user = await User.find({googleId: id});
    return user;
  } catch {
    console.log('getUser failed', err);
  }
}

// createUser should take a user object ({ googleId, username }) which should make a new user entry in the db
const createUser = async (userObj) => {
  const {googleId, givenName: username} = userObj;

  try {
    const newUser = await User.create({googleId, username});
    return newUser;
  } catch {
    console.log('createUser failed', err);
  }
}

const findAndUpdate = async (id, data) => {
  const updatedUser = await User.findOneAndUpdate({ googleId: id }, { $push:{creations: data} }, { new: true})
  return updatedUser

} 

const findAndUpdateFavorites = async (id, data) => {
  const updatedUser = await User.findOneAndUpdate({ googleId: id }, { $push:{favorites: data} }, { new: true})
  return updatedUser

} 

module.exports = {
  getUser,
  createUser,
  findAndUpdate,
  findAndUpdateFavorites
}