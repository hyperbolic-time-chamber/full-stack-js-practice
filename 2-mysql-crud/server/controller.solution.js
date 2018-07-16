var { connection } = require('../database-mysql');

module.exports = {
  read: function(req, res) {
    connection.query('SELECT * FROM todos', function(err, result) {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(200).send(result);
    });
  },

  create: function(req, res) {
    var { name } = req.body;
    connection.query(`INSERT INTO todos (name) VALUES ('${name}')`, function(
      err,
      result,
    ) {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(201).send(`${result.affectedRows} record(s) created`);
    });
  },

  update: function(req, res) {
    var { todo } = req.body;
    var { id } = req.params;
    connection.query(
      `UPDATE todos SET name = '${todo}' WHERE id = '${id}'`,
      function(err, result) {
        if (err) {
          return res.status(400).send(err);
        }
        res.status(202).send(`${result.affectedRows} record(s) updated`);
      },
    );
  },

  delete: function(req, res) {
    var { id } = req.params;
    connection.query(`DELETE FROM todos WHERE id = '${id}'`, function(
      err,
      result,
    ) {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(202).send(`${result.affectedRows} record(s) deleted`);
    });
  },
};
