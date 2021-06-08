const { feedRouter } = require('./feed.js');
const { drinkRouter } = require('./drinkView.js');
const { searchRouter } = require('./search.js');
const { customRouter } = require('./customFeed.js');
const { usersRouter } = require('./users.js');
const { businessesRouter } = require('./businesses.js');

module.exports = (app) => {
  app.use(`/routes/feed/`, feedRouter),
    app.use('/routes/search/', searchRouter),
    app.use('/routes/drink/', drinkRouter),
    app.use('/routes/custom/', customRouter),
    app.use('/routes/users/', usersRouter),
    app.use('/routes/businesses', businessesRouter);
};
