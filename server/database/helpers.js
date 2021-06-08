const { User, Drink, Business, Transaction, addDrink } = require('./Models');
require('dotenv').config();
const { API_KEY } = require('../config.js');

// getUser should take a userId and return the found user, empty array or null if not found?
const getUser = async (id) => {
  try {
    const user = await User.find({ googleId: id });
    return user;
  } catch (err) {
    console.log('getUser failed', err);
  }
};

// createUser should take a user object ({ googleId, username }) which should make a new user entry in the db
const createUser = async (userObj) => {
  const { googleId, givenName: username } = userObj;

  try {
    const newUser = await User.create({ googleId, username });
    return newUser;
  } catch (err) {
    console.log('createUser failed', err);
  }
};

const findAndUpdate = async (id, data) => {
  const updatedUser = await User.findOneAndUpdate(
    { googleId: id },
    { $push: { creations: data } },
    { new: true }
  );
  return updatedUser;
};

const findAndUpdateFavorites = async (id, data) => {
  const updatedUser = await User.findOneAndUpdate(
    { googleId: id },
    { $push: { favorites: data } },
    { new: true }
  );
  return updatedUser;
};

const findAndDeleteFavorites = async (id, drinkId) => {
  const updatedUser = await User.findOneAndUpdate(
    { googleId: id },
    { $pull: { favorites: { favId: drinkId } } },
    { new: true }
  );
  return updatedUser;
};

const registerBusiness = async (
  googleId,
  name,
  contactInformationObj,
  detailsObj
) => {
  try {
    const business = await Business.findOne({ name });
    if (business) {
      return false;
    }
    const newBusiness = await new Business({
      name,
      contactInformation: contactInformationObj,
      details: detailsObj,
    }).save();
    const user = await User.findOne({ googleId });
    user.businessId = newBusiness._id;
    await user.save();
    return newBusiness;
  } catch (error) {
    throw error;
  }
};

const addMenuItem = async (businessId, drinkObj) => {
  try {
    const { name, alcoholic, directions, ingredients } = drinkObj;
    const business = await Business.findById(businessId);
    if (!business) {
      return false;
    }
    let drink = await Drink.findOne({ name });
    if (!drink) {
      await addDrink({
        drinkName: name,
        instructions: directions,
        alcoholic: alcoholic === 'Alcoholic' ? true : false,
        ingredients,
      });
      const foundDrink = await Drink.findOne({ name });
      if (foundDrink) {
        drink = foundDrink;
      } else {
        return false;
      }
    }
    business.menu = business.menu.includes(drink._id.toString())
      ? business.menu
      : [...business.menu, drink._id];
    await business.save();
    drink.soldAt = drink.soldAt.includes(business._id.toString())
      ? drink.soldAt
      : [...drink.soldAt, business._id];
    await drink.save();
    return business.menu;
  } catch (error) {
    throw error;
  }
};

const removeMenuItem = async (businessId, drinkObj) => {
  try {
    const { name } = drinkObj;
    const business = await Business.findById(businessId);
    if (!business) {
      return false;
    }
    const mappedMenu = await Promise.all(
      business.menu.map(async (id) => {
        const foundDrink = await Drink.findById(id);
        return { id, name: foundDrink.name };
      })
    );
    business.menu = mappedMenu
      .filter((currentDrinkObj) => currentDrinkObj.name !== name)
      .map((currentDrinkObj) => currentDrinkObj.id);
    const savedBusiness = await business.save();
    const drink = await Drink.findOne({ name });
    drink.soldAt = drink.soldAt.filter((id) => id.toString() !== businessId);
    await drink.save();
    return savedBusiness.menu;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUser,
  createUser,
  findAndUpdate,
  findAndUpdateFavorites,
  findAndDeleteFavorites,
  registerBusiness,
  addMenuItem,
  removeMenuItem,
};
