const Sequelize = require('sequelize');

const { connection } = require('./');

const todo = connection.define(
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
  .then(() => console.log('successfully synced database'))
  .catch(err => console.log('error syncing database ', err));

module.exports = {
  todo,
};
