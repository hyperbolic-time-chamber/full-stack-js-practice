var express = require('express');
var bodyParser = require('body-parser');

var { routes } = require('./routes');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

module.exports = {
  app,
};
