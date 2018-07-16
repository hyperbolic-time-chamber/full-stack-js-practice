/* eslint-disable prefer-arrow-callback, no-undef, func-names, no-var, object-shorthand  */

var routes = require('express').Router();
var controller = require('./controller');

routes
  .route('/todolist')
  .get(controller.read)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.delete);

module.exports = { routes };
