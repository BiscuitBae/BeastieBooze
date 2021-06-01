const { feedRouter } = require('./feed.js');
const { drinkRouter } = require('./drinkView.js');
const { searchRouter } = require('./search.js');

// import loginRouter from './login.js';

module.exports = (app) => {
  app.use('/routes/feed', feedRouter),
  app.use('/routes/search', searchRouter),
  app.use('/routes/drink/', drinkRouter)
  // app.use('/routes/login', loginRouter)
}
