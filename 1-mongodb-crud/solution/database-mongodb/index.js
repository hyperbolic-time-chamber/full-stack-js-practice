/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/toDoList');

var db = mongoose.connection;

db.on(
  'error',
  console.log.bind(console, 'Error connection to toDoList database'),
);

db.once('open', () =>
  console.log('Successful connection to toDoList database'),
);

module.exports = db;
