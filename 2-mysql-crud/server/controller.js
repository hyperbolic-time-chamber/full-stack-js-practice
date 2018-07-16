const { connection } = require('../database-mysql');

module.exports = {
  read: (req, res) => {
    connection.query('SELECT * FROM todos', (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(result);
    });
  },
  create: (req, res) => {
    const { name } = req.body;
    connection.query(
      `SELECT * FROM todos WHERE name = '${name}'`,
      (err, result) => {
        if (err) {
          console.error(err);
        }
        if (!result.length) {
          connection.query(
            `INSERT INTO todos (name) VALUES ('${name}')`,
            (err, result) => {
              if (err) {
                console.error(err);
              }
              res.status(201).send(`${result.affectedRows} record(s) created`);
            },
          );
        } else {
          res.status(409).send('record already exists');
        }
      },
    );
  },
  update: (req, res) => {
    const { name, newName } = req.body;
    connection.query(
      `UPDATE todos SET name = '${newName}' WHERE name = '${name}'`,
      (err, result) => {
        if (err) {
          console.error(err);
        }
        res.status(202).send(`${result.affectedRows} record(s) updated`);
      },
    );
  },
  delete: (req, res) => {
    const { name } = req.query;
    connection.query(
      `DELETE FROM todos WHERE name = '${name}'`,
      (err, result) => {
        if (err) {
          console.error(err);
        }
        res.status(202).send(`${result.affectedRows} record(s) deleted`);
      },
    );
  },
};
