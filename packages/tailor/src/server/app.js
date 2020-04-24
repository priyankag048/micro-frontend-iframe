const express = require('express');
const next = require('next');
const app = next({});
const handler = app.getRequestHandler();

app.prepare()
  .then(async () => {
    const server = express();
    server.get('*', (req,res) => handler(req,res));
    server.listen(4000, () => {
      console.log('Server started. Running on http://localhost:4000');
    });
  });