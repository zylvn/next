require('dotenv').config();
const express = require('express')
const next = require('next')
const mongoose = require('mongoose');
const { connectDb }= require('./models')

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});

// Il y avait le caractere "#" (je l'ai enlevé) juste avant le "@cluster0-nucaz.mongodb.net/test?retryWrites=true&w=majority", le souci venait peut-etre de là, re-verifie sur Atlas je pense
const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-nucaz.mongodb.net/test?retryWrites=true&w=majority`;

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    return connectDb(connectionString);
  })
  .then((connector) => {
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