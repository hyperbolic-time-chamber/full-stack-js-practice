const helpers = require('./helpers');

module.exports.createSub = (req, res) => {
  const { sub } = req.body;
  helpers.createSub(sub, (err, message) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send({ message });
    }
  });
};

module.exports.fetchAllPosts = (req, res) => {
  const sub = req.path.slice(5);
  helpers.fetchAllPosts(sub, (err, posts) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send({ posts });
    }
  });
};

module.exports.createPost = (req, res) => {
  const { sub, text } = req.body;
  helpers.createPost(sub, text, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

module.exports.fetchPost = (req, res) => {
  const sub = req.path.slice(5, req.path.length - 6);
  const { postId } = req.query;
  helpers.fetchPost(sub, postId, (err, post) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send({ post });
    }
  });
};

module.exports.updatePost = (req, res) => {
  const { postId, sub, text } = req.body;
  helpers.updatePost(postId, sub, text, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

module.exports.deletePost = (req, res) => {
  const { postId, sub, text } = req.body;
  helpers.deletePost(postId, sub, (err, message) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(202).send({ message });
    }
  });
};
