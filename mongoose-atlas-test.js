/**
 * Reads the .env file and make the listed variables available
 * to the node process.
 *
 * If .env file contains:
 * ```
 * PASSWORD=blablablabla
 * ```
 *
 * Then, you'll be able to access this variable via `process.env.PASSWORD`
 */
require('dotenv').config();
const mongoose = require('mongoose');


const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@frey-1-r50f6.mongodb.net/test?retryWrites=true&w=majority`

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  created: {
    type: Date,
    required: [true, 'Create date is required']
  }
});

const User = mongoose.model('user', userSchema, 'user');

async function createUser(username) {
  return new User({
    username,
    created: Date.now()
  }).save();
}

async function findUser(username) {
  return await User.findOne({ username })
}

(async () => {
  const connector = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const username = process.argv[2].split('=')[1];

  let user = await connector.then(async () => {
    return findUser(username);
  });

  if (!user) {
    user = await createUser(username);
  }

  console.log(user)
  process.exit(0)
})();