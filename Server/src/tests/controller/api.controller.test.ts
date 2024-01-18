import request from 'supertest';
import app from '../../app';
import { match } from 'assert';

const randomEmail = Math.floor(Math.random() * 100000);

test('/api/reg', async () => {
<<<<<<< HEAD:Server/src/tests/controller/api.controller.test.ts

  const res = await request(app).post('/api/reg').send({name: 'anton',surname: 'mir',email: '3312@gmail.com',pwd: 'wqeddasd',});
=======
  const res = await request(app).post('/api/reg').send({ name: 'anton', surname: 'mir', email: `${randomEmail}@gmail.com`, pwd: 'wqeddasd' });
>>>>>>> 9f304b3722caa99f9946b4f5f22f7f1fb07bd0b2:src/tests/controller/api.controller.test.ts

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});



test('/api/auth', async () => {
<<<<<<< HEAD:Server/src/tests/controller/api.controller.test.ts

  const res = await request(app).post('/api/auth').send({email: '3312@gmail.com',pwd: 'wqeddasd',});
=======
  const res = await request(app).post('/api/auth').send({ email: `${randomEmail}@gmail.com`, pwd: 'wqeddasd' });
>>>>>>> 9f304b3722caa99f9946b4f5f22f7f1fb07bd0b2:src/tests/controller/api.controller.test.ts

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});
