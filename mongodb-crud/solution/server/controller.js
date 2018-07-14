const ToDoList = require('../database-mongodb/model');

module.exports = {
  //  Read all (cRud) -- collection
  read: (req, res) => {
    ToDoList.find({}).exec((err, result) => {
      if (err) {
        res.status(400).send('Error on fetching data');
      }
      res.status(200).send(result);
    });
  },
  //  Create (Crud) -- collection
  create: (req, res) => {
    const { name } = req.body;
    const toDo = new ToDoList({ name });
    toDo.save((err, product) => {
      if (err) {
        console.error(err);
        res.status(400).send(`Error on creating ${name}`);
      } else {
        res.status(201).send(product);
      }
    });
  },
  // Update (crUd) -- member
  update: (req, res) => {
    const { name, newName } = req.body;
    ToDoList.findOneAndUpdate(
      { name },
      { $set: { name: newName } },
      { new: true },
      (err, doc) => {
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
  delete: (req, res) => {
    const { name } = req.body;
    ToDoList.findOneAndRemove({ name }, err => {
      if (err) {
        console.error(err);
        res.status(400).send(`Error on deleting ${name}`);
      } else {
        res.status(200).send(`${name} is deleted`);
      }
    });
  },
};
