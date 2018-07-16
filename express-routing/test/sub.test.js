const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../server/server.js');

let postId = '';

describe('Test the sub path', () => {
  test('It should create a subredidit', done => {
    request(app)
      .post('/sub')
      .send({ sub: 'jest-test' })
      .then(res => {
        expect(
          fs.existsSync(path.join(__dirname, '../server/subreddits/jest-test')),
        ).toBe(true);
        done();
      });
  });

  test('It should post to a subreddit', done => {
    request(app)
      .post('/sub/jest-test')
      .send({ sub: 'jest-test', text: 'this is a test post' })
      .then(res => {
        postId = res.body.postId;
        expect(res.body.text).toBe('this is a test post');
        done();
      });
  });

  test('It should fetch a post', done => {
    request(app)
      .get('/sub/jest-test/posts')
      .query({ postId })
      .then(res => {
        expect(res.body.post).toBe('this is a test post');
        done();
      });
  });

  test('It should fetch all posts', done => {
    request(app)
      .get('/sub/jest-test')
      .then(res => {
        expect(res.body.posts.length).toBe(1);
        done();
      });
  });

  test('It should update a post', done => {
    request(app)
      .put('/sub/jest-test/posts')
      .send({ sub: 'jest-test', text: 'this is a new test post', postId })
      .then(res => {
        expect(res.body.text).toBe('this is a new test post');
        done();
      });
  });

  test('It should delete a post', done => {
    request(app)
      .delete('/sub/jest-test/posts')
      .send({ sub: 'jest-test', postId })
      .then(res => {
        expect(
          fs.readdirSync(path.join(__dirname, '../server/subreddits/jest-test'))
            .length,
        ).toBe(0);
        done();
      });
  });

  afterAll(() => {
    fs.rmdirSync(path.join(__dirname, '../server/subreddits/jest-test'));
  });
});
