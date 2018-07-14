const mysql = require('mysql');
const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

connection
  .authenticate()
  .then(() => console.log('successfully authenticated connected'))
  .catch(err => console.log('error authenticating connection'));
  

module.exports = {
  connection,
};
