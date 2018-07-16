var mysql = require('mysql');
var dbConfig = require('./config');

var connection = mysql.createConnection(dbConfig);

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting to to do list database');
  } else {
    console.log('Connected to the to do list database');
  }
});

module.exports = {
  connection,
};
