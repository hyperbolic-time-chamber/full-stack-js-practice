/*
Implement these functions following the node style callback pattern
*/

const fs = require('fs')

const readMyFile = (path, callback) => {
  fs.readFile(path, 'utf8', (err, content) => {
    if (err) return callback(err, null)
    callback(null, content)
  })
}

const createMyFile = (path, data, callback) => {
  fs.writeFile(path, data, (err) =>{
    if (err) return console.error(err)
    callback()
  })
}

//takes in multi-line file and convert to a single line
const readFileAndConvertToSentence = (path, callback) => {
  readMyFile(path, (err, content) => {
    if (err) { callback(err, null) }
    else {
      let sentence = content.split('\n').join(' ')
      callback(null, sentence) 
    }
  })
}

module.exports = { createMyFile, readMyFile, readFileAndConvertToSentence }