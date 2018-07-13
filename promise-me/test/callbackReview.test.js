// const { someSortOfFunction } = require('../exercises/callbackReview');
const fs = require('fs')
const { createMyFile, readMyFile } = require('../solutions/callbackSolutions.js');

beforeEach(() => {
  fs.unlink(__dirname + '/lib/callbackFile.txt', (err) => {
    if (err) { return }
    console.log('callbackFile.txt was deleted')
  })
})

test('has a callback that takes an error as its first argument', () => {
  readMyFile('./test', (err, content) => {
    expect(err.code).toEqual('EISDIR');
    expect(content).toBeUndefined();
  })
})

test('has a callback that takes an something not null or undefined', () => {
  createMyFile(__dirname + '/lib/callbackFile.txt', 'hello', () => {
    readMyFile(__dirname + '/lib/callbackFile.txt', (err, content) => {
      expect(content).toEqual('hello')
    })
  })
})