import feedRouter from './feed.js'

module.exports = (app) => {
  app.use('/routes/feed', feedRouter)
}