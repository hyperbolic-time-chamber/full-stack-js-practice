/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

var routes = require('express').Router();

/* Uncomment for no ORM */
// var controller = require('./controller.solution');

/* Uncomment for Sequelize */
var controller = require('./sequelize/controller.solution');

routes
  .route('/todolist')
  .get(controller.read)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.delete);

module.exports = { routes };
