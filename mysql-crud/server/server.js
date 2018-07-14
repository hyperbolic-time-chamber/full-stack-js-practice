const express = require('express');
const bodyParser = require('body-parser');

// Uncomment for no ORM
require('../database-mysql');

// Uncomment for Sequelize
// require('../database-mysql-sequelize');
// require('../database-mysql-sequelize/models');

const { routes } = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

module.exports = {
  app,
};
