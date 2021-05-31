const {Router} = require("express");
const axios = require('axios');
const dotenv = require('dotenv')

const feedRouter = Router();

dotenv.config()


feedRouter.get('/', (req, res) => {
  axios.get(`www.thecocktaildb.com/api/json/v2/${process.env.API_KEY}/randomselection.php`)
    .then((response) => {
      res.status(200).send(response.data.drinks);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
})


export default feedRouter