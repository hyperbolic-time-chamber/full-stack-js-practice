/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

const connection = require('./config');

connection
  .authenticate()
  .then(function() {
    console.log('successfully authenticated connected');
  })
  .catch(function(err) {
    console.log('error authenticating connection', err);
  });

module.exports = {
  connection,
};
