const router = require('express').Router();
const controller = require('./controller.js');

router.route('/sub').post(controller.createSub);

router
  .route('/sub/:sub')
  .get(controller.fetchAllPosts)
  .post(controller.createPost);

router
  .route('/sub/:sub/posts')
  .get(controller.fetchPost)
  .put(controller.updatePost)
  .delete(controller.deletePost);

module.exports = router;