const {Router} = require("express");
const axios = require('axios');

const feedRouter = Router();


feedRouter.get('/', (req, res) => {
  axios.get('www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
    .then((response) => {
      res.status(200).send(response.data.drinks);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
})


export default feedRouter