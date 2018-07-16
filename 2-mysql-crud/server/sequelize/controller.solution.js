/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

const { todo } = require('../../database-mysql-sequelize/models');

module.exports = {
  read: function(req, res) {
    todo.findAll({}).then(function(result) {
      res.status(200).send(result);
    });
  },

  create: function(req, res) {
    const { name } = req.body;
    todo
      .findOne({ where: { name } })
      .then(function(result) {
        if (!result) {
          todo
            .create({
              name,
            })
            .then(function(result) {
              res.status(201).send(result);
            })
            .catch(err => {
              console.error(err);
            });
        }
      })
      .catch(err => {
        console.error(err);
      });
  },

  update: function(req, res) {
    const { name, newName } = req.body;
    todo
      .update({ name: newName }, { where: { name } })
      .then(() => {
        res.status(202).send('updated');
      })
      .catch(err => {
        console.error(err);
      });
  },

  delete: function(req, res) {
    const { name } = req.query;
    todo
      .destroy({
        where: { name },
      })
      .then(function(result) {
        res.status(202).send('deleted');
      })
      .catch(err => {
        console.error(err);
      });
  },
};
