var request = require('supertest');
var { app } = require('../server/server');
var db = require('../database-mongodb/index');

describe('Test controllers', function() {
  test('It should retrieve todos from database', function(done) {
    request(app)
      .get('/toDoList')
      .then(function(response) {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('It should add a new todo to database', function(done) {
    request(app)
      .post('/toDoList')
      .send({
        name: 'Testing post',
      })
      .then(function(response) {
        expect(response.statusCode).toBe(201);
        done();
      })
      .catch(function(err) {
        console.error(err);
        done();
      });
  });

  test('It should update a todo in database', function(done) {
    request(app)
      .put('/toDoList')
      .send({
        name: 'Testing post',
        newName: 'Updating post',
      })
      .then(function(response) {
        expect(response.statusCode).toBe(202);
        done();
      });
  });

  test('It should delete a todo in database', function(done) {
    request(app)
      .delete('/toDoList')
      .query({ name: 'Testing post' })
      .then(function(response) {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  afterAll(function() {
    db.close();
    // db.disconnect();
  });
});
