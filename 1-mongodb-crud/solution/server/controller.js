const ToDoList = require('../database-mongodb/model');

module.exports = {
  /* Retrieve all documents. */
  read: function(req, res) {
    ToDoList.find({}).exec(function(err, result) {
      if (err) {
        res.status(400).send('Error on fetching data');
      }
      res.status(200).send(result);
    });
  },

  /* Create one document. */
  create: function(req, res) {
    const { name } = req.body;
    const toDo = new ToDoList({ name });
    toDo.save(function(err, product) {
      if (err) {
        console.error(err);
        res.status(400).send(`Error on creating ${name}`);
      } else {
        res.status(201).send(product);
      }
    });
  },

  /* Update one document by name. */
  update: function(req, res) {
    const { name, newName } = req.body;
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

  /* Delete one document by name. */
  delete: function(req, res) {
    const { name } = req.body;
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
