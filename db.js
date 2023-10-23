const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/productosDB';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
