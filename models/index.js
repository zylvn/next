// DATABASE_URL = 'mongodb: //localhost:27017/node-express-mongodb-server'

const mongoose = require('mongoose');
const User = require('./user');
const Message = require('./message');


const connectDb = (connectionString) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
const models = {
  User,
  Message
};
module.exports = {
  models,
  connectDb
};