/*
Implement these functions following the node style callback pattern
*/

const fs = require('fs')

//reads file at specified path and returns content
const readMyFile = (path, callback) => {
  //TODO
}

//creates and writes data(string) to specified path
const createMyFile = (path, data, callback) => {
  //TODO
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
  //TODO
}

module.exports = { createMyFile, readMyFile, readFileAndConvertToSentence }