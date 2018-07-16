/* Implement these functions following the Node.js callback pattern. */

var fs = require('fs');

/* Reads the contents of a file at a specified path. */
var readMyFile = function(path, callback) {
  // TODO
};

/* Creates and writes data(string) to specified path. */
var createMyFile = function(path, data, callback) {
  // TODO
};

/*
Reads a file that contains multi-line strings and returns one single sentence.

For example:

`buy it
use it
break it
fix it
trash it
change it
mail
upgrade it`

becomes

`buy it use it break it fix it trash it change it mail upgrade it`
*/
var readFileAndConvertToSentence = function(path, callback) {
  // TODO
};

module.exports = { createMyFile, readMyFile, readFileAndConvertToSentence };
