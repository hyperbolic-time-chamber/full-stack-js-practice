/* Implement these functions following the new Promise pattern */

var fs = require('fs');

/* Reads the contents of a file at a specified path. */
var readMyFileAsync = function(path) {
  // TODO
};

/* Creates and writes data(string) to specified path. */
var createMyFileAsync = function(path, data) {
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
var readFileAndConvertToSentenceAsync = function(path) {
  // TODO
};

/* Be sure you understand how to chain two promises. */

module.exports = {
  createMyFileAsync,
  readMyFileAsync,
  readFileAndConvertToSentenceAsync,
};
