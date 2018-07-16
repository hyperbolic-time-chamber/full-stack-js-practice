/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

var ToDoList = require('../database-mongodb/model');

module.exports = {
  //  Read all (cRud) -- collection
  read: function(req, res) {
    ToDoList.find({}).exec(function(err, result) {
      if (err) {
        res.status(400).send('Error on fetching data');
      }
      res.status(200).send(result);
    });
  },

  //  Create (Crud) -- collection
  create: function(req, res) {
    var { name } = req.body;
    var toDo = new ToDoList({ name });
    toDo.save(function(err, product) {
      if (err) {
        console.error(err);
        res.status(400).send(`Error on creating ${name}`);
      } else {
        res.status(201).send(product);
      }
    });
  },

  // Update (crUd) -- member
  update: function(req, res) {
    var { name, newName } = req.body;
    ToDoList.findOneAndUpdate(
      { name },
      { $set: { name: newName } },
      { new: true },
      function(err, doc) {
        if (err) {
          console.error(err);
          res.status(400).send(`Error on updating ${name} to ${newName}`);
        } else {
          res.status(202).send(`${name} is updated to ${doc}`);
        }
      },
    );
  },

  // Delete (cruD) -- member
  delete: function(req, res) {
    var { name } = req.body;
    ToDoList.findOneAndRemove({ name }, function(err) {
      if (err) {
        console.error(err);
        res.status(400).send(`Error on deleting ${name}`);
      } else {
        res.status(200).send(`${name} is deleted`);
      }
    });
  },
};
