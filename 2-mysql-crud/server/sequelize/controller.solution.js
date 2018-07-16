var { Todo } = require('../../database-mysql-sequelize/models');

module.exports = {
  read: function(req, res) {
    Todo.findAll({}).then(function(result) {
      res.status(200).send(result);
    });
  },

  create: function(req, res) {
    var { name } = req.body;
    Todo.create({
      name,
    })
      .then(function(result) {
        res.status(201).send(result);
      })
      .catch(function(err) {
        res.status(400).send(err);
      });
  },

  update: function(req, res) {
    var { todo } = req.body;
    var { id } = req.params;
    Todo.update({ name: todo }, { where: { id } })
      .then(() => {
        res.status(202).send('updated');
      })
      .catch(function(err) {
        res.status(400).send(err);
      });
  },

  delete: function(req, res) {
    var { id } = req.params;
    Todo.destroy({
      where: { id },
    })
      .then(function(result) {
        res.status(202).send('deleted');
      })
      .catch(function(err) {
        res.status(400).send(err);
      });
  },
};
