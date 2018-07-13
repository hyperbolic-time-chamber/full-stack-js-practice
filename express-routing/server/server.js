const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');

const router = require('./routes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(router);

module.exports = app;
