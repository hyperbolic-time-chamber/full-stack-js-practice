const fs = require('fs')
const { createMyFileAsync, readMyFileAsync, readFileAndConvertToSentenceAsync } = require('../solutions/promiseSolutions.js');

const filePath = __dirname + '/lib/promiseFile.txt'

describe('functions should would with via promise style', () => {
  afterEach(() => {
    fs.unlink(filePath, (err) => {
      if (err) { return }
      console.log('promiseFile.txt was deleted')
    })
  })

  test('it should have a catch block that takes an error', (done) => {
    let error = false;
    return readMyFileAsync('./test')
      .catch(() => {
        error = true;
        expect(error).toEqual(true)
        done();
      })
  })

  test('it should have a then block on successful writeFile', (done) => {
    return createMyFileAsync(filePath, 'promised hello')
      .then(() => {
        return readMyFileAsync(filePath)
          .then((content) => {
            expect(content).toEqual('promised hello')
            done()
          })
          .catch(() => expect(error).toEqual('noooo'))
      })
      .catch((err) => {
        expect(err).toBeUndefined()
        done()
      })
  })

  test('it should have a then block on successful writeFile', (done) => {
    return createMyFileAsync(filePath, 'hello\nyou are\nsuper')
      .then(() => {
        return readFileAndConvertToSentenceAsync(filePath)
          .then(content => {
            expect(content).toEqual('hello you are super')
            done();
          })
          .catch(err => {
            expect(err).toBeUndefined()
            done();
          })
      })
      .catch(err => {
        expect(err).toBeUndefined()
        done();
      })
  })
})