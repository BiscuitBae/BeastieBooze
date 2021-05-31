import feedRouter from './feed.js';
import drinkRouter from './drinkView.js';


module.exports = (app) => {
  app.use('/routes/feed', feedRouter),
  app.use('/routes/drink/:drinkId', drinkRouter)
}
