import test from 'ava';
const request = require('supertest');
const app = require('./../../app.js');


test('check status', async t => {
  const response = await request(app)
    .get('/status');
    t.is(response.status, 200);
    t.deepEqual(response.body, {
      status : 'Ok'
    });
})

test('greet', async t => {
  const name = 'Nitish';
  const food = 'Pizza';
  const response = await request(app)
    .get('/greet')
    .query({name, food});

    t.is(response.status, 200);
    t.is(response.body.message, `hello ${name} would you like a ${food}`);
})


test('Dont send username', async t => {
  const password = 'some-hase'
  const response = await request(app)
    .post('/register')
    .send({password});

    t.is(response.status, 400);
    t.is(response.body.message, `username is missing`);
})


test('Dont send password', async t => {
  const username = 'some-hase'
  const response = await request(app)
    .post('/register')
    .send({username});

    
    t.is(response.status, 400);
    t.is(response.body.message, `password is missing`);
})