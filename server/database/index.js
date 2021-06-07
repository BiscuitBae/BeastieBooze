const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/beastie-booze';
const mongoUri2 = 'mongodb://localhost:27017/beastie-booze';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true

});

module.exports = {
  db,
  Models: require('./Models.js')
};