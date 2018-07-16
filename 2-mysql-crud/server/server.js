var express = require('express');
var bodyParser = require('body-parser');
var { routes } = require('./routes');

var app = express();

/* Uncomment for no ORM */
require('../database-mysql');

/* Uncomment for Sequelize */
// require('../database-mysql-sequelize');
// require('../database-mysql-sequelize/models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

module.exports = {
  app,
};
