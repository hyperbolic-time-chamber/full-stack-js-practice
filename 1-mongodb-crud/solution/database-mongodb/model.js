/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

var mongoose = require('mongoose');
var db = require('./index');

var Schema = mongoose.Schema;

var toDoListSchema = new Schema({
  name: { type: String, maxlength: 50, required: true },
});

var ToDoList = db.model('ToDoList', toDoListSchema);

module.exports = ToDoList;
