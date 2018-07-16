const routes = require('express').Router();

// Uncomment for no ORM
const controller = require('./controller');

// Uncomment for Sequelize
// const controller = require('./sequelize/controller');

routes
  .route('/todolist')
  .get(controller.read)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.delete);

module.exports = { routes };
