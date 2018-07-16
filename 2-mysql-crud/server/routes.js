var routes = require('express').Router();

/* Uncomment for no ORM */
var controller = require('./controller');

/* Uncomment for Sequelize */
// var controller = require('./sequelize/controller');

routes
  .route('/todolist')
  .get(controller.read)
  .post(controller.create);

routes
  .route('/todolist/:id')
  .put(controller.update)
  .delete(controller.delete);

module.exports = { routes };
