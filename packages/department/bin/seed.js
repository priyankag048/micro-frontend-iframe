const { MongoClient } = require('mongodb');
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'org';

const departments = [
  {id: 1, name: 'Finance'},
  {id: 2, name: 'Engineering'},
  {id: 3, name: 'Human Resources'},
  {id: 4, name: 'Marketing'},
  {id: 5, name: 'Sales'}
];

const populateData = async () => {
  try {
      const client = await MongoClient.connect(DB_URL);
      const db = client.db(DB_NAME);
      console.log(`Connected successfully to ${DB_NAME} database`);
      await db
      .collection('department')
      .insertMany(departments);
      client.close();
  } catch(err) {
      console.error(`connection error ${err.message}`)
  };
}

populateData();