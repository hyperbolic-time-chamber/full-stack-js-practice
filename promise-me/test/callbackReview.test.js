// const { someSortOfFunction } = require('../exercises/callbackReview');
const fs = require('fs')
const { createMyFile, readMyFile } = require('../solutions/callbackSolutions.js');

test('has a callback that takes an error as its first argument', () => {
  readMyFile('./test', (err, content) => {
    expect(err.code).toEqual('EISDIR');
    expect(content).toBeUndefined();
  })
})
