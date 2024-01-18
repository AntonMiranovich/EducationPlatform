import { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../../repository/user.repository';

const client = {
  query: jest.fn(),
};

jest.mock('pg', () => {
  const pool = { connect: jest.fn(() => client) };
  return { Pool: jest.fn(() => pool) };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('test getAllUserDB function', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({
      rows: [
        {
          id: 1,
          name: 'Anton',
          surname: 'Miranovich',
          email: 'asdqweqwedsa',
          pwd: '24369',
        },
      ],
    });
    const result = await getAllUserDB();

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Anton');
    expect(result[0].surname).toBe('Miranovich');
    expect(result[0].email).toBe('asdqweqwedsa');
    expect(result[0].pwd).toBe('24369');
    expect(result).toHaveLength(1);
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
});

describe('test getUserByIdDB', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({
      rows: [
        {
          id: 1,
          name: 'Anton',
          surname: 'Miranovich',
          email: 'asdqweqwedsa',
          pwd: '24369',
        },
      ],
    });
    const result = await getUserByIdDB(1);

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Anton');
    expect(result[0].surname).toBe('Miranovich');
    expect(result[0].email).toBe('asdqweqwedsa');
    expect(result[0].pwd).toBe('24369');
    expect(result).toHaveLength(1);
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
});

describe('test updateUserDB', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({
      rows: [
        {
          id: 1,
          name: 'Anton',
          surname: 'Miranovich',
          email: 'asdqweqwedsa',
          pwd: '24369',
        },
      ],
    });
    const result = await updateUserDB(1, 'Anton', 'Miranovich', 'asdqweqwedsa', '24369');

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Anton');
    expect(result[0].surname).toBe('Miranovich');
    expect(result[0].email).toBe('asdqweqwedsa');
    expect(result[0].pwd).toBe('24369');
    expect(result).toHaveLength(1);
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
});

describe('test deleteUserDB', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({
      rows: [
        {
          id: 1,
          name: 'Anton',
          surname: 'Miranovich',
          email: 'asdqweqwedsa',
          pwd: '24369',
        },
      ],
    });
    const result = await deleteUserDB(2);

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Anton');
    expect(result[0].surname).toBe('Miranovich');
    expect(result[0].email).toBe('asdqweqwedsa');
    expect(result[0].pwd).toBe('24369');
    expect(result).toHaveLength(1);
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
});
