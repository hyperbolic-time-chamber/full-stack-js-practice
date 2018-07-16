// include mongoose in our project
var mongoose = require('mongoose');
var db = require('./index');

// get a reference to Schema
var Schema = mongoose.Schema;

// define your toDoListSchema
var toDoListSchema = new Schema({
  name: { type: String, maxlength: 50, required: true },
});

// compile the schema into a Model
var ToDoList = db.model('ToDoList', toDoListSchema);

module.exports = ToDoList;
