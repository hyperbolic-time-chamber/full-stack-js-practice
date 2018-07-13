const fs = require('fs')
const { createMyFileAsync, readMyFileAsync, readFileAndConvertToSentenceAsync, readTwoFiles } = require('../exercises/promiseReview.js');

const filePath = __dirname + '/lib/promiseFile.txt'
const filePathTwo = __dirname + '/lib/promiseFileTwo.txt'

describe('functions should would with via promise style', () => {
  afterEach(() => {
    fs.unlink(filePath, (err) => {
      if (err) { return }
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

describe('functions should would with via promise style', () => {
  beforeEach(() => {
    fs.writeFile(filePath, filePathTwo, (err) => {
      if (err) { return }
    })
    fs.writeFile(filePathTwo, 'this is from second file', (err) => {
      if (err) { return }
    })
  })

  afterEach(() => {
    fs.unlink(filePath, (err) => {
      if (err) { return }
      fs.unlink(filePathTwo, (err) => {
        if (err) { return }
      })
    })
  })

  test('should be able to chain two readfiles', (done) => {
    return readTwoFiles(filePath)
      .then(content => {
        expect(content).toEqual('this\nis\nfrom\nsecond\nfile')
        done()
      })
      .catch(err => {
        console.error(err)
        done()
      })
  })


})