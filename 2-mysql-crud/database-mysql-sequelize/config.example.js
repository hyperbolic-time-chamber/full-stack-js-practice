const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;
