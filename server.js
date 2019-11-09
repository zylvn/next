const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});

///Seems useless
// require('dotenv').config();
///

const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://vaan:trygun#@cluster0-nucaz.mongodb.net/test?retryWrites=true&w=majority', {
//   useNewUrlParser: true
// });


// mongoose.connect('mongodb://localhost/localdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://uwgvmecjhwegxe8gd1q4:oYiyl0feEiqj9xpUcA8P@bkflbpzgdzgflvs-mongodb.services.clever-cloud.com:27017/bkflbpzgdzgflvs';


mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  console.log("DB connected");
  if (err) {
    console.error(err)
    return
  }
  //...
});

//
// const db = mongoose.connection;
// db.once('open', () => console.log("Connected to Database"));
///




const handle = app.getRequestHandler();

app.prepare()
  .then(() => {

    const server = express();



    server.get('/user/:name', (req, res) => {
      app.render(req, res, '/user', {
        name: req.params.name
      });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) {
        throw err
      }
      console.log("ready on 3000");

    })

  })