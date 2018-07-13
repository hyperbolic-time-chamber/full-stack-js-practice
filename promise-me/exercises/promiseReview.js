/*
Implement these functions following the new Promise pattern
*/

const fs = require('fs')

//reads file at specified path and returns content
const readMyFileAsync = (path) => {
  //TODO
}

//creates and writes data(string) to specified path
const createMyFileAsync = (path, data) => {
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
const readFileAndConvertToSentenceAsync = (path) => {
  //TODO
}





module.exports = { createMyFileAsync, readMyFileAsync, readFileAndConvertToSentenceAsync }