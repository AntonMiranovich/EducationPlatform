import request from 'supertest';
import app from '../../app';

test('/api/reg', async () => {

  const res = await request(app).post('/api/reg').send({name: 'anton',surname: 'mir',email: 'a12213122331223123@gmail.com',pwd: 'wqeddasd',});

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});

test('/api/auth', async () => {

  const res = await request(app).post('/api/auth').send({email: 'a12213122331223123@gmail.com',pwd: 'wqeddasd',});

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});
