/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

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
    var { name, newName } = req.body;
    connection.query(
      `UPDATE todos SET name = '${newName}' WHERE name = '${name}'`,
      function(err, result) {
        if (err) {
          return res.status(400).send(err);
        }
        res.status(202).send(`${result.affectedRows} record(s) updated`);
      },
    );
  },

  delete: function(req, res) {
    var { name } = req.query;
    connection.query(`DELETE FROM todos WHERE name = '${name}'`, function(
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
