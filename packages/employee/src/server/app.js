const express = require('express');
const { MongoClient } = require('mongodb');
const next = require('next');
const { DB_URL, DB_NAME, PORT } = require('./config');
const app = next({});
const handler = app.getRequestHandler();

app.prepare()
  .then(async () => {
    const server = express();
    const client = await MongoClient.connect(DB_URL);
    const db = client.db(DB_NAME);
    server.get('/employee', async (req, res) => {
      const employees = await db.collection('employee').find({}).toArray(); 
      res.status(200).json(employees);
    });
    server.get('*', (req,res) => handler(req,res));
    server.listen(PORT, () => {
      console.log(`Server started. Running on http://localhost:${PORT}`);
    });
  });