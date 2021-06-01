import feedRouter from './feed.js';
import drinkRouter from './drinkView.js';
import searchRouter from './search.js'


module.exports = (app) => {
  app.use('/routes/feed', feedRouter),
  app.use('/routes/search', searchRouter),
  app.use('/routes/drink/', drinkRouter)
}
