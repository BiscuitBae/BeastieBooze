const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String, // not sure if this will a string or a number, need to check once we can get data from google
  username: String
});

const DrinkSchema = new mongoose.Schema({
  name: String,
  instructions: String
})

const User = mongoose.model('User', UserSchema);
const Drink = mongoose.model('Drink', DrinkSchema);

module.exports = {
  User,
  Drink
};