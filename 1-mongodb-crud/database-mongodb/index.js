// include mongoose in our project
var mongoose = require('mongoose');

// open connection to the database on our locally running instance of MongoDB
mongoose.connect('mongodb://localhost/toDoList');

var db = mongoose.connection;

// get notified if we connect succesffuly or if a connection error occurs
db.on(
  'error',
  console.log.bind(console, 'Error connection to toDoList database'),
);

db.once('open', () =>
  console.log('Successful connection to toDoList database'),
);

module.exports = db;
