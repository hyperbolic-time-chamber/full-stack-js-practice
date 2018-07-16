var request = require('supertest');
var { app } = require('../server/server');
var { connection } = require('../database-mysql');

describe('Test controllers', function() {
  test('It should retrieve todos from database', function(done) {
    request(app)
      .get('/todolist')
      .then(function(response) {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('It should add a new todo to database', function(done) {
    request(app)
      .post('/todolist')
      .send({
        name: 'Testing post',
      })
      .then(function(response) {
        expect(response.statusCode).toBe(201);
        done();
      });
  });

  test('It should update a todo in database', function(done) {
    request(app)
      .put('/todolist/1')
      .send({
        todo: 'Updating post',
      })
      .then(function(response) {
        expect(response.statusCode).toBe(202);
        done();
      });
  });

  test('It should delete a todo in database', function(done) {
    request(app)
      .delete('/todolist/1')
      .then(function(response) {
        expect(response.statusCode).toBe(202);
        done();
      });
  });

  afterAll(function() {
    connection.destroy();
  });
});
