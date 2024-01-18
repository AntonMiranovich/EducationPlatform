import { getAllUser, getUserById, updateUser, deleteUser } from '../../service/user.service';
import * as repository from '../../repository/user.repository';
import ExceptionType from '../../helper/exception';

describe('test getAllUser function', () => {
  test('getAllUser success', async () => {
    const repFunction = jest.spyOn(repository, 'getAllUserDB');
    repFunction.mockResolvedValue([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
      {
        id: 2,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
    ]);
    const result = await getAllUser();

    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
      {
        id: 2,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
    ]);
    expect(result).toHaveLength(2);
  });

  test('return error', async () => {
    const repFunction = jest.spyOn(repository, 'getAllUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await getAllUser();
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_GET_USERS_NOT_FOUND);
    }
  });
});

describe('test getUserById function', () => {
  test('test success', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByIdDB');
    repFunction.mockResolvedValue([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
    ]);
    const result = await getUserById(1);

    expect(result[0].id).toBe(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result).toEqual([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
    ]);
  });

  test('test error', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByIdDB');
    repFunction.mockResolvedValue([]);
    try {
      await getUserById(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_GET_USERS_BY_ID_NOT_FOUND);
    }
  });
});

describe('test updateUser', () => {
  test('return success', async () => {
    const repFunction = jest.spyOn(repository, 'updateUserDB');
    repFunction.mockResolvedValue([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
    ]);
    const result = await updateUser(1, 'Anton', 'Miranovich', '123123123', 'qwdqwe');

    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Anton');
    expect(result).toEqual([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
    ]);
  });

  test('test return Error', async () => {
    const repFunction = jest.spyOn(repository, 'updateUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await updateUser(1, 'Anton', 'Miranovich', '123123123', 'qwdqwe');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_PUT_USERS_NOT_UPDATE);
    }
  });
});

describe('deleteUserById', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'deleteUserDB');
    repFunction.mockResolvedValue([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
    ]);
    const result = await deleteUser(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toEqual([
      {
        id: 1,
        name: 'Anton',
        surname: 'Miranovich',
        email: '123123123',
        pwd: 'qwdqwe',
      },
    ]);
    expect(result).toHaveLength(1);
  });

  test('test return Error', async () => {
    const repFunction = jest.spyOn(repository, 'deleteUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await deleteUser(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_DELETE_USER_NOT_DELETE);
    }
  });
});
