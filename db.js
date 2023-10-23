const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb-container:27017/productosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
