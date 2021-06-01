const { Router } = require("express");
const dotenv = require('dotenv')
dotenv.config()

import axios from 'axios'

const loginRouter = Router();

loginRouter.get('/login', (req, res) => {
  // axios.get('<URL>')
  // .then(( { data }) => {
  //     res.status(200).send(data);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.sendStatus(500);
  //   });
  axios.get('/login')
    .then(() => {
      passport.authenticate('google', { scope: ['profile', 'email'] });
    })
})


export default loginRouter