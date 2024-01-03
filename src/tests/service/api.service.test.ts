import * as repository from '../../repository/api.repository';
import ExceptionType from '../../helper/exception';
import { registrationUser, authUser } from '../../service/api.service';
import bcrypt from 'bcrypt';

describe('test registrationUser service', () => {
  test('return success', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmail');
    repFunction.mockResolvedValue([]);

    const repFunctionCreate = jest.spyOn(repository, 'registrationUserDB');
    repFunctionCreate.mockResolvedValue([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: 'asdqweqwedsa',
        pwd: '24369',
      },
    ]);

    const result = await registrationUser('Anton', 'Miranovich', 'asdqweqwedsa', '24369');

    expect(repFunctionCreate).toHaveBeenCalled();
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Anton');
    expect(result[0].surname).toBe('Miranovich');
    expect(result[0].email).toBe('asdqweqwedsa');
    expect(result[0].pwd).toBe('24369');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: 'asdqweqwedsa',
        pwd: '24369',
      },
    ]);
  });

  test('return error', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmail');
    repFunction.mockResolvedValue([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: 'asdqweqwedsa',
        pwd: '24369',
      },
    ]);
    try {
      await registrationUser('Anton', 'Miranovich', 'asdqweqwedsa', '24369');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.API_TITLE_EMPTY);
    }
  });

  test('return error registration', async () => {
    const repFunction2 = jest.spyOn(repository, 'getUserByEmail');
    repFunction2.mockResolvedValue([]);
    const repFunction = jest.spyOn(repository, 'registrationUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await registrationUser('Anton', 'Miranovich', 'asdqweqwedsa', '24369');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.API_EMAIL_NOT_CREATE);
    }
  });
});

describe('test authUser', () => {
  test('return success', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmail');
    repFunction.mockResolvedValue([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: 'asdqweqwedsa',
        pwd: '24369',
      },
    ]);
    const bcryptHash = jest.spyOn(bcrypt, 'compare');
    bcryptHash.mockResolvedValue(true);

    const result = await authUser('asdqweqwedsa', '24369');

    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Anton');
    expect(result[0].surname).toBe('Miranovich');
    expect(result[0].email).toBe('asdqweqwedsa');
    expect(result[0].pwd).toBe('24369');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: 'asdqweqwedsa',
        pwd: '24369',
      },
    ]);
  });

  test('api email not create', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmail');
    repFunction.mockResolvedValue([]);
    try {
      await authUser('asdqweqwedsa', '24369');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.API_EMAIL_NOT_CREATE);
    }
  });

  test('api not check password', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmail');
    const bcryptHash = jest.spyOn(bcrypt, 'compare');
    bcryptHash.mockResolvedValue(false);
    repFunction.mockResolvedValue([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: 'asdqweqwedsa',
        pwd: '24369',
      },
    ]);
    try {
      await authUser('asdqweqwedsa', '24369');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.API_NOT_CHACK_PASSWORD);
    }
  });
});
