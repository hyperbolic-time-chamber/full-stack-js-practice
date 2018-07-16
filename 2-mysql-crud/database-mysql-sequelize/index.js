var connection = require('./config');

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
