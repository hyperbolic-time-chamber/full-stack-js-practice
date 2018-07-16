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


// -------------promise chaining-------------

//reads the first file which contains the path for the second file
//then reads the second file and its content
//then returns each word in that content on separate lines
/*
pathOne contains "../test/lib/example.js"
pathTwo contains "hello word"
returns 
`hello
world`
*/

const readTwoFiles = (pathOne) => {
  //TODO
}

module.exports = { createMyFileAsync, readMyFileAsync, readFileAndConvertToSentenceAsync, readTwoFiles }