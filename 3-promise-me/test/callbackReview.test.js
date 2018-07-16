var fs = require('fs');
var path = require('path');
var {
  createMyFile,
  readMyFile,
  readFileAndConvertToSentence,
} = require('../exercises/callbackReview.js');

var filePath = path.join(__dirname, 'callbackFile.txt');

describe('Our File System helper functions have a callback as their last parameter that, when invoked,', function() {
  afterEach(function() {
    fs.unlink(filePath, function(err) {
      if (err) {
        console.error(err);
      }
    });
  });

  test('receives an error as its first argument if there is an error.', function(done) {
    var incorrectFilePath = path.join(__dirname, 'some-incorrect-file-path');
    createMyFile(filePath, 'hello', function() {
      readMyFile(incorrectFilePath, function(err, content) {
        expect(err.code).toEqual('ENOENT');
        expect(content).toBeNull();
        done();
      });
    });
  });

  test('receives the data retrieved from a file as its second argument.', function(done) {
    createMyFile(filePath, 'hello', function() {
      readMyFile(filePath, function(err, content) {
        expect(err).toBeNull();
        expect(content).toEqual('hello');
        done();
      });
    });
  });

  test('receives the data retrieved from a file as its second argument.', function(done) {
    createMyFile(filePath, 'hello\nyou are\nsuper', function() {
      readFileAndConvertToSentence(filePath, function(err, content) {
        expect(content).toEqual('hello you are super');
        done();
      });
    });
  });
});
