/*
Implement these functions following the new Promise pattern
*/

const fs = require('fs')

//reads file at specified path
const readMyFileAsync = (path) => {
  return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, content) => {
      if (err) { reject(err) }
      else { resolve(content) }
    })
  })
}

//creates and writes data to specified path
const createMyFileAsync = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) { reject(err) }
      else { resolve() }
    })
  })
}

const readFileAndConvertToSentenceAsync = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) { reject(err) }
      else { 
        let sentence = content.split('\n').join(' ')
        resolve(sentence)
      }
    })
  })
}

/*
Convert these functions following the Promise.promisify pattern
*/



module.exports = { createMyFileAsync, readMyFileAsync, readFileAndConvertToSentenceAsync }