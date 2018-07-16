/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

var { app } = require('./server');

var port = 3000;

app.listen(port, function() {
  console.log(`Listening on PORT ${port}...`);
});
