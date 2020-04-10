const express = require('express');
const { MongoClient } = require('mongodb');
const next = require('next');
const { DB_URL, DB_NAME } = require('./config');
const app = next({});
const handler = app.getRequestHandler();

app.prepare()
  .then(async () => {
    const server = express();
    const client = await MongoClient.connect(DB_URL);
    const db = client.db(DB_NAME);
    server.get('/department', async (req, res) => {
      const departments = await db.collection('department').find({}).toArray(); 
      res.status(200).json(departments);
    });
    server.get('*', (req,res) => handler(req,res));
    server.listen(4000, () => {
      console.log('Server started. Running on http://localhost:4000');
    });
  });