const routes = require('express').Router();
const controller = require('./controller');

routes
  .route('/toDoList')
  .get(controller.read)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.delete);

module.exports = { routes };
