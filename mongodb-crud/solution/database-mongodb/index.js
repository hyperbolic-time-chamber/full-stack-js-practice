const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/toDoList');

const db = mongoose.connection;

db.on(
  'error',
  console.log.bind(console, 'Error connection to toDoList database'),
);

db.once('open', () =>
  console.log('Successful connection to toDoList database'),
);

module.exports = db;
