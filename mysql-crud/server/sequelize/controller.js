const { todo } = require('../../database-mysql-sequelize/models');

module.exports = {
  read: (req, res) => {
    todo.findAll({}).then(result => {
      res.status(200).send(result);
    });
  },
  create: (req, res) => {
    const { name } = req.body;
    todo
      .findOne({ where: { name } })
      .then(result => {
        if (!result) {
          todo
            .create({
              name,
            })
            .then(result => {
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
  update: (req, res) => {
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
  delete: (req, res) => {
    const { name } = req.query;
    todo
      .destroy({
        where: { name },
      })
      .then(result => {
        res.status(202).send('deleted');
      })
      .catch(err => {
        console.error(err);
      });
  },
};
