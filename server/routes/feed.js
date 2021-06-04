const { Router } = require("express");
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const feedRouter = Router();

feedRouter.get('/mocktails', (req, res) => {
  axios.get(`http://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/filter.php?a=Non_Alcoholic`)
    .then(({ data }) => {
      const mocktails = data.drinks.slice(0, 10);
      res.status(200).send(mocktails);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

feedRouter.get('/', (req, res) => {
  axios.get(`http://www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/randomselection.php`)
    .then(( { data }) => {
      res.status(200).send(data.drinks);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = { feedRouter };