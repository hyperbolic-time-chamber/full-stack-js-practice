var fs = require('fs');

// reads file at specified path and returns content
var readMyFileAsync = function(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, 'utf8', function(err, content) {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
};

// creates and writes data(string) to specified path
var createMyFileAsync = function(path, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(path, data, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// reads a file that contains multi-line strings
/*
`let us
make this
into
a promise`
*/

// and returns one single sentence
/*
"let us make this into a promise"
*/
var readFileAndConvertToSentenceAsync = function(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, 'utf8', function(err, content) {
      if (err) {
        reject(err);
      } else {
        var sentence = content.split('\n').join(' ');
        resolve(sentence);
      }
    });
  });
};

/* Be sure you understand how to chain two promises. */

module.exports = {
  createMyFileAsync,
  readMyFileAsync,
  readFileAndConvertToSentenceAsync,
};
