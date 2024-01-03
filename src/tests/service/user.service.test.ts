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

describe('test getUserById function',()=>{
    
})
