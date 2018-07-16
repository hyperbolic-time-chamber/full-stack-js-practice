/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var  */

/* Implement these functions following the Node.js callback pattern. */

var fs = require('fs');

/* Reads the contents of a file at a specified path. */
var readMyFile = function(path, callback) {
  fs.readFile(path, 'utf8', function(err, content) {
    if (err) return callback(err, null);
    callback(null, content);
  });
};

/* Creates and writes data(string) to specified path. */
var createMyFile = (path, data, callback) => {
  fs.writeFile(path, data, function(err) {
    if (err) return console.error(err);
    callback();
  });
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
  readMyFile(path, function(err, content) {
    if (err) {
      callback(err, null);
    } else {
      var sentence = content.split('\n').join(' ');
      callback(null, sentence);
    }
  });
};

module.exports = { createMyFile, readMyFile, readFileAndConvertToSentence };
