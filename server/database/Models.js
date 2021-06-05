const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const DATABASE = 'BeastieBooze';
// for dev - uncomment the next line and comment out line 10
const dbLocation = `mongodb://localhost:27017/${DATABASE}`;
// for prod
// const dbLocation = process.env.ATLAS_URL;

mongoose.connect(dbLocation, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log(`sucessfully connected! ${DATABASE}`);
  }).catch(err => console.error('Failed to connect to database', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const UserSchema = new mongoose.Schema({
  googleId: String, // not sure if this will a string or a number, need to check once we can get data from google
  username: String,
  favorites: [],
  creations: []
});

const DrinkSchema = new mongoose.Schema({
  name: String,
  instructions: String,
  ingredients: {},
  alcoholic: Boolean,
  createdBy: String
  //add a createdBy to the drinkSchema to link to Users once created
});

const User = mongoose.model('User', UserSchema);
const Drink = mongoose.model('Drink', DrinkSchema);

const addDrink = async (drink) => {
  const { drinkName: name, instructions, ingredients, alcoholic } = drink
  const newDrink = new Drink({
    name,
    instructions,
    ingredients,
    alcoholic
  })
  await newDrink.save();
};

const getDrinks = async () => {
  console.log('atlas url:', process.env.ATLAS_URL);
  return await Drink.find({}).exec();
};

module.exports = {
  User,
  Drink,
  addDrink,
  getDrinks,
};