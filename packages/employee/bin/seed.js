const { MongoClient, Db } = require('mongodb');
const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'org';

const employees = [{
  id: 1,
  first_name: "Georges",
  last_name: "Ennor",
  email: "gennor0@soup.io",
  gender: "Male",
  department: 1
}, {
  id: 2,
  first_name: "Raye",
  last_name: "Caudray",
  email: "rcaudray1@feedburner.com",
  gender: "Female",
  department: 2
}, {
  id: 3,
  first_name: "Amandie",
  last_name: "Fumagallo",
  email: "afumagallo2@photobucket.com",
  gender: "Female",
  department: 1
}, {
  id: 4,
  first_name: "Fidela",
  last_name: "Slyne",
  email: "fslyne3@tinyurl.com",
  gender: "Female",
  department: 4
}, {
  id: 5,
  first_name: "Giacomo",
  last_name: "Addis",
  email: "gaddis4@google.com.br",
  gender: "Male",
  department: 3
}, {
  id: 6,
  first_name: "Hymie",
  last_name: "Haensel",
  email: "hhaensel5@scientificamerican.com",
  gender: "Male",
  department: 2
}, {
  id: 7,
  first_name: "Boy",
  last_name: "Daintith",
  email: "bdaintith6@latimes.com",
  gender: "Male",
  department: 3
}, {
  id: 8,
  first_name: "Caty",
  last_name: "Larroway",
  email: "clarroway7@google.co.uk",
  gender: "Female",
  department: 5
}, {
  id: 9,
  first_name: "Teddie",
  last_name: "Fluger",
  email: "tfluger8@nifty.com",
  gender: "Male",
  department: 5
}, {
  id: 10,
  first_name: "Terri-jo",
  last_name: "Fedoronko",
  email: "tfedoronko9@shop-pro.jp",
  gender: "Female",
  department: 3
}, {
  id: 11,
  first_name: "Colman",
  last_name: "Trimby",
  email: "ctrimbya@123-reg.co.uk",
  gender: "Male",
  department: 2
}, {
  id: 12,
  first_name: "Odey",
  last_name: "Gynne",
  email: "ogynneb@java.com",
  gender: "Male",
  department: 1
}, {
  id: 13,
  first_name: "Patricio",
  last_name: "Frawley",
  email: "pfrawleyc@tiny.cc",
  gender: "Male",
  department: 2
}, {
  id: 14,
  first_name: "Will",
  last_name: "Greatreax",
  email: "wgreatreaxd@facebook.com",
  gender: "Male",
  department: 2
}, {
  id: 15,
  first_name: "Morganne",
  last_name: "Biever",
  email: "mbievere@netlog.com",
  gender: "Female",
  department: 3
}, {
  id: 16,
  first_name: "Pepe",
  last_name: "Narracott",
  email: "pnarracottf@ycombinator.com",
  gender: "Male",
  department: 4
}, {
  id: 17,
  first_name: "Weston",
  last_name: "Hucker",
  email: "whuckerg@myspace.com",
  gender: "Male",
  department: 3
}, {
  id: 18,
  first_name: "Thorny",
  last_name: "Brownstein",
  email: "tbrownsteinh@wunderground.com",
  gender: "Male",
  department: 5
}, {
  id: 19,
  first_name: "Valery",
  last_name: "Kubatsch",
  email: "vkubatschi@bbc.co.uk",
  gender: "Female",
  department: 3
}, {
  id: 20,
  first_name: "Rosanne",
  last_name: "Jandera",
  email: "rjanderaj@stumbleupon.com",
  gender: "Female",
  department: 1
}];
const populateData = async () => {
  try {
      const client = await MongoClient.connect(DB_URL);
      const db = client.db(DB_NAME);
      console.log(`Connected successfully to ${DB_NAME} database`);
      await db
      .collection('employee')
      .insertMany(employees);
      client.close();
  } catch(err) {
      console.error(`connection error ${err.message}`)
  };
}

populateData();