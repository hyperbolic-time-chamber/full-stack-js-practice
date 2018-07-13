const fs = require('fs');
const path = require('path');
const bluebird = require('bluebird');
const shortid = require('shortid');

bluebird.promisifyAll(fs);

exports.createSub = (sub, callback) => {
  const exists = fs.existsSync(path.join(__dirname, `subreddits/${sub}`));
  if (exists) {
    callback(null, 'Subreddit already exists');
  } else if (sub) {
    fs.mkdirAsync(path.join(__dirname, `subreddits/${sub}`))
      .catch(err => callback('Error creating subreddit'))
      .then(() => callback(null, 'Subreddit successfully created'));
  } else {
    callback(null, 'Subreddit name must not be blank');
  }
};

exports.fetchAllPosts = (sub, callback) => {
  fs.readdirAsync(path.join(__dirname, `subreddits/${sub}`))
    .catch(err => callback('Error retrieving posts'))
    .then(files => {
      const data = files.map(file =>
        fs
          .readFileAsync(path.join(__dirname, `subreddits/${sub}/${file}`))
          .catch(err => callback('Error retrieving posts'))
          .then(post => ({
            id: file.slice(0, file.length - 4),
            text: post.toString(),
          })),
      );
      Promise.all(data)
        .catch(err => callback('Error retrieving posts'))
        .then(posts => callback(null, posts));
    });
};

exports.createPost = (sub, text, callback) => {
  const postId = shortid.generate();
  fs.writeFileAsync(
    path.join(__dirname, `subreddits/${sub}/${postId}.txt`),
    text,
  )
    .catch(err => callback('Error creating post'))
    .then(() => callback(null, { postId, text }));
};

exports.fetchPost = (sub, postId, callback) => {
  fs.readFileAsync(path.join(__dirname, `subreddits/${sub}/${postId}.txt`))
    .catch(err => callback('Error retrieving post'))
    .then(post => {
      callback(null, post.toString());
    });
};

exports.updatePost = (postId, sub, text, callback) => {
  fs.writeFileAsync(
    path.join(__dirname, `subreddits/${sub}/${postId}.txt`),
    text,
  )
    .catch(err => callback('Error creating post'))
    .then(() => callback(null, { postId, text }));
};

exports.deletePost = (postId, sub, callback) => {
  fs.unlinkAsync(path.join(__dirname, `subreddits/${sub}/${postId}.txt`))
    .catch(err => callback('Error deleting post'))
    .then(() => callback(null, 'Post successfully deleted'));
};
