const mongoose = require('mongoose');
const db = require('./index');

const Schema = mongoose.Schema;

const toDoListSchema = new Schema({
  name: { type: String, maxlength: 50, required: true, unique: true },
});

const ToDoList = db.model('ToDoList', toDoListSchema);

module.exports = ToDoList;
