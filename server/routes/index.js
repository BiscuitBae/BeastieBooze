import feedRouter from './feed.js';

export default (app) => {
  app.use('/routes/feed', feedRouter);
};