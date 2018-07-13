// const { someSortOfFunction } = require('../exercises/callbackReview');
const fs = require('fs')
const { createMyFile, readMyFile, readFileAndConvertToSentence } = require('../solutions/callbackSolutions.js');

describe('functions should would with via callback style', () => {
  beforeEach(() => {
    fs.unlink(__dirname + '/lib/callbackFile.txt', (err) => {
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
    createMyFile(__dirname + '/lib/callbackFile.txt', 'hello', () => {
      readMyFile(__dirname + '/lib/callbackFile.txt', (err, content) => {
        expect(err).toBeNull();
        expect(content).toEqual('hello')
        done()
      })
    })
  })
})

test('has a callback that takes an something not null or undefined', (done) => {
  createMyFile(__dirname + '/lib/callbackFile.txt', 'hello\nyou are\nsuper', () => {
    readFileAndConvertToSentence(__dirname + '/lib/callbackFile.txt', (err, content) => {
      expect(content).toEqual('hello you are super')
      done()
    })
  })
})