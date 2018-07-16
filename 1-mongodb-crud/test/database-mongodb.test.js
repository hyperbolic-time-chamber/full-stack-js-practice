const request = require('supertest');
const { app } = require('../server/server');
const db = require('../database-mongodb/index');

describe('Test controllers', () => {
  test('It should retrieve todos from database', done => {
    request(app)
      .get('/toDoList')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test('It should add a new todo to database', done => {
    request(app)
      .post('/toDoList')
      .send({
        name: 'Testing post',
      })
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });

  test('It should update a todo in database', done => {
    request(app)
      .put('/toDoList')
      .send({
        name: 'Testing post',
        newName: 'Updating post',
      })
      .then(response => {
        expect(response.statusCode).toBe(202);
        done();
      });
  });

  test('It should delete a todo in database', done => {
    request(app)
      .delete('/toDoList')
      .query({ name: 'Testing post' })
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  afterAll(() => {
    db.close();
    // db.disconnect();
  });
});
