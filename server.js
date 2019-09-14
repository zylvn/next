const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {

    const server = express();

    server.get('/user/:name', (req, res) => {

      // console.log("doooo");
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