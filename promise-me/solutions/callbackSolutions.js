/*
Implement these functions following the node style callback pattern
*/

const fs = require('fs')

const readMyFile = (path, callback) => {
  fs.readFile(path, 'utf8', (err, content) => {
    if (err) return callback(err)
    return callback(null, content)
  })
}

const createMyFile = (path, data, callback) => {
  fs.writeFile(path, data, (err) =>{
    if (err) return console.error(err)
    return callback()
  })
}

createMyFile('./testing.txt', 'hello', () => console.log('done'))

module.exports = { createMyFile, readMyFile }