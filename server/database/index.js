const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/beastie-booze';
const mongoUri2 = 'mongodb://localhost:27017/beastie-booze';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

// const uri = `mongodb+srv://DavidSosa20:${process.env.DATABASE_PASSWORD}@cluster0.z2svn.mongodb.net/beastie-booze?retryWrites=true&w=majority`;

// const db = mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   // eslint-disable-next-line no-console
//   .then(() => console.log('connected to db'))
//   .catch();

module.exports = {
  db,
  Models: require('./Models.js'),
};
