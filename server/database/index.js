const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/beastie-booze';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = {
  db,
  Models: require('./Models.js')
};