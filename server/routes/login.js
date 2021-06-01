const { Router } = require("express");
const dotenv = require('dotenv')
dotenv.config()

import axios from 'axios'

const loginRouter = Router();

loginRouter.get('/', async (req, res) => {
  // axios.get('<URL>')
  // .then(( { data }) => {
  //     res.status(200).send(data);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.sendStatus(500);
  //   });
  try {
    const auth = await passport.authenticate('google', { scope: ['profile', 'email'] });
    console.log(auth);
  } catch (err) {
    console.log('error in loginRouter');
  }

})


export default loginRouter