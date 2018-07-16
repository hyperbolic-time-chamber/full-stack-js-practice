/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

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
    var { name, newName } = req.body;
    Todo.update({ name: newName }, { where: { name } })
      .then(() => {
        res.status(202).send('updated');
      })
      .catch(function(err) {
        res.status(400).send(err);
      });
  },

  delete: function(req, res) {
    var { name } = req.query;
    Todo.destroy({
      where: { name },
    })
      .then(function(result) {
        res.status(202).send('deleted');
      })
      .catch(function(err) {
        res.status(400).send(err);
      });
  },
};
