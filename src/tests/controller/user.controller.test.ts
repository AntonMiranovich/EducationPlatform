import request from 'supertest';
import app from '../../app';
let id;

test('post', async () => {
  const res = await request(app).post('/user').send({ name: 'anton', surname: 'mir', email: 'antonmir992@gmail.com', pwd: 'wqeddasd' });

  id = res.body[0].id;
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});

test('get', async () => {
  const res = await request(app).get('/user');

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});

test('getById', async () => {
  const res = await request(app).get(`/user/${id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBe(1);
});

test('put', async () => {
  const res = await request(app).put(`/user/${id}`).send({ name: 'anton', surname: 'mor', email: 'antonmir992@gmail.com', pwd: 'wqeddasd' });

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
  expect(res.body).toBeTruthy();
});

test('delete', async () => {
  const res = await request(app).delete(`/user/${id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
  expect(res.body).toBeTruthy();
});
