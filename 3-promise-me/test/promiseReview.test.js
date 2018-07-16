var fs = require('fs');
var path = require('path');
var {
  createMyFileAsync,
  readMyFileAsync,
  readFileAndConvertToSentenceAsync,
} = require('../exercises/promiseReview.js');

var filePath = path.join(__dirname, 'promiseFile.txt');

describe('Our File System helper functions now return promises that', function() {
  afterEach(function() {
    fs.unlink(filePath, function(err) {
      if (err) {
        return;
      }
    });
  });

  test('uses the catch method to listen for and log errors.', function(done) {
    var error = false;
    var incorrectFilePath = path.join(__dirname, 'some-incorrect-file-path');
    return readMyFileAsync(incorrectFilePath).catch(function() {
      error = true;
      expect(error).toEqual(true);
      done();
    });
  });

  test('uses the then method to access data retrieved after successful execution of a given task.', function(done) {
    return createMyFileAsync(filePath, 'promised hello')
      .then(function() {
        return readMyFileAsync(filePath);
      })
      .then(function(content) {
        expect(content).toEqual('promised hello');
        done();
      })
      .catch(function(err) {
        expect(err).toBeUndefined();
        done();
      });
  });

  test('uses the then method to access data retrieved after successful execution of a given task.', function(done) {
    return createMyFileAsync(filePath, 'hello\nyou are\nsuper')
      .then(function() {
        return readFileAndConvertToSentenceAsync(filePath);
      })
      .then(function(content) {
        expect(content).toEqual('hello you are super');
        done();
      })
      .catch(function(err) {
        expect(err).toBeUndefined();
        done();
      });
  });
});
