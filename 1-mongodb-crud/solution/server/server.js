const express = require('express');
const bodyParser = require('body-parser');

const { routes } = require('./routes');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

module.exports = {
  app,
};
