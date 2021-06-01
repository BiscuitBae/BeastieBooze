import feedRouter from './feed.js';
import drinkRouter from './drinkView.js';
// import loginRouter from './login.js';

module.exports = (app) => {
  app.use('/routes/feed', feedRouter),
  app.use('/routes/drink/', drinkRouter)
  // app.use('/routes/login', loginRouter)
}
