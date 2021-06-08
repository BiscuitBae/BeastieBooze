const { Router } = require('express');
const {
  registerBusiness,
  addMenuItem,
  removeMenuItem,
} = require('../database/helpers.js');

const businessesRouter = Router();

businessesRouter.post('/', (req, res) => {
  const {
    googleId,
    name,
    contactInformation: contactInformationObj,
    details: detailsObj,
  } = req.body;
  registerBusiness(googleId, name, contactInformationObj, detailsObj)
    .then((newBusiness) => {
      if (!newBusiness) {
        return res.send(newBusiness);
      }
      res.send(newBusiness);
    })
    .catch((err) => console.log(err));
});

businessesRouter.post('/drink', (req, res) => {
  const { businessId, drinkObj } = req.body;
  addMenuItem(businessId, drinkObj)
    .then((newMenu) => {
      if (!newMenu) {
        return res.send(newMenu);
      }
      res.send(newMenu);
    })
    .catch((err) => console.log(err));
});

businessesRouter.delete('/drink', (req, res) => {
  const { businessId, drinkObj } = req.body;
  removeMenuItem(businessId, drinkObj)
    .then((newMenu) => {
      if (!newMenu) {
        return res.send(newMenu);
      }
      res.send(newMenu);
    })
    .catch((err) => console.log(err));
});

module.exports = { businessesRouter };
