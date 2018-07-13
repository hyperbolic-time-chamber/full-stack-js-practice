/*
Implement these functions following the node style callback pattern
*/

const fs = require('fs')

//reads file at specified path and returns content
const readMyFile = (path, callback) => {
  fs.readFile(path, 'utf8', (err, content) => {
    if (err) return callback(err, null)
    callback(null, content)
  })
}

//creates and writes data(string) to specified path
const createMyFile = (path, data, callback) => {
  fs.writeFile(path, data, (err) =>{
    if (err) return console.error(err)
    callback()
  })
}

//reads a file that contains multi-line strings
/*
`let us
make this
into
a promise`
*/

// and returns one single sentence
/*
"let us make this into a promise"
*/
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