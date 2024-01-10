import request from 'supertest';
import app from '../../app';
import { match } from 'assert';

const randomEmail = Math.floor(Math.random() * 100000);

test('/api/reg', async () => {
  const res = await request(app).post('/api/reg').send({ name: 'anton', surname: 'mir', email: `${randomEmail}@gmail.com`, pwd: 'wqeddasd' });

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});

test('/api/auth', async () => {
  const res = await request(app).post('/api/auth').send({ email: `${randomEmail}@gmail.com`, pwd: 'wqeddasd' });

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});
