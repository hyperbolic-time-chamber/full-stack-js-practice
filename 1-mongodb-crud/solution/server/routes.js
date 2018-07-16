const routes = require('express').Router();
const controller = require('./controller');

routes
  .route('/todolist')
  .get(controller.read)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.delete);

module.exports = { routes };
