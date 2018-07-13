/*
Implement these functions following the new Promise pattern
*/

const fs = require('fs')

//reads file at specified path and returns content
const readMyFileAsync = (path) => {
  return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, content) => {
      if (err) { reject(err) }
      else { resolve(content) }
    })
  })
}

//creates and writes data(string) to specified path
const createMyFileAsync = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) { reject(err) }
      else { resolve() }
    })
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

//reads the first file which contains the path for the second file
//then reads the second file and return its content
//then returns each word in that content on separate lines
const readTwoFiles = (pathOne) => {
  return readMyFileAsync(pathOne)
    .then(pathTwo => {
      return readMyFileAsync(pathTwo)
    })
    .then(content => content.split(' ').join('\n'))
    .catch(err => console.error(err))
}

module.exports = { createMyFileAsync, readMyFileAsync, readFileAndConvertToSentenceAsync, readTwoFiles }