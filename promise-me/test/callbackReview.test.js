// const { someSortOfFunction } = require('../exercises/callbackReview');
const fs = require('fs')
const { createMyFile, readMyFile, readFileAndConvertToSentence } = require('../solutions/callbackSolutions.js');

const filePath = __dirname + '/lib/callbackFile.txt';

describe('functions should would with via callback style', () => {
  afterEach(() => {
    fs.unlink(filePath, (err) => {
      if (err) { return }
      console.log('callbackFile.txt was deleted')
    })
  })
  
  test('has a callback that takes an error as its first argument', (done) => {
    readMyFile('./test', (err, content) => {
      expect(err.code).toEqual('EISDIR');
      expect(content).toBeNull();
      done();
    })
  })
  
  test('has a callback that takes an something not null or undefined', (done) => {
    createMyFile(filePath, 'hello', () => {
      readMyFile(filePath, (err, content) => {
        expect(err).toBeNull();
        expect(content).toEqual('hello')
        done()
      })
    })
  })
  
  test('has a callback that takes an something not null or undefined', (done) => {
    createMyFile(filePath, 'hello\nyou are\nsuper', () => {
      readFileAndConvertToSentence(filePath, (err, content) => {
        expect(content).toEqual('hello you are super')
        done()
      })
    })
  })
})
