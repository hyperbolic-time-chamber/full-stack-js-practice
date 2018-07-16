const mysql = require('mysql');
const dbConfig = require('./config');

const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
  if (err) {
    console.log('Error connecting to to do list database');
  } else {
    console.log('Connected to the to do list database');
  }
});

module.exports = {
  connection,
};
