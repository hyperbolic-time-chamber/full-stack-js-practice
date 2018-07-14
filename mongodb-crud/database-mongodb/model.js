// include mongoose in our project
const mongoose = require('mongoose');
const db = require('./index');

// get a reference to Schema
const Schema = mongoose.Schema;

// define your toDoListSchema
const toDoListSchema = new Schema({
  name: { type: String, maxlength: 50, required: true, unique: true },
});

// compile the schema into a Model
const ToDoList = db.model('ToDoList', toDoListSchema);

module.exports = ToDoList;
