var Sequelize = require('sequelize');

var { connection } = require('./');

var Todo = connection.define(
  'todo',
  {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  },
  { timestamps: false },
);

connection
  .sync({ force: false })
  .then(function() {
    console.log('successfully synced database');
  })
  .catch(function(err) {
    console.log('error syncing database ', err);
  });

module.exports = {
  Todo,
};
