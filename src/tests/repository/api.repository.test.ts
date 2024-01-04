import { getUserByEmail, registrationUserDB } from '../../repository/api.repository';

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

describe('test getUserByEmail', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Anton', surname: 'Miranovich', email: '12123113edsa', pwd: 'dasdqwq122' }] });
    const result = await getUserByEmail('12123113edsa');

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Anton');
    expect(result[0].surname).toBe('Miranovich');
    expect(result[0].email).toBe('12123113edsa');
    expect(result[0].pwd).toBe('dasdqwq122');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, name: 'Anton', surname: 'Miranovich', email: '12123113edsa', pwd: 'dasdqwq122' }]);
  });
});

describe('test registrationUserDB', () => {
    test('return success', async () => {
      client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Anton', surname: 'Miranovich', email: '12123113edsa', pwd: 'dasdqwq122' }] });
      const result = await registrationUserDB('Anton','Miranovich','12123113edsa','dasdqwq122');
  
      expect(client.query).toHaveBeenCalled();
      expect(result[0].id).toBe(1);
      expect(result[0].name).toBe('Anton');
      expect(result[0].surname).toBe('Miranovich');
      expect(result[0].email).toBe('12123113edsa');
      expect(result[0].pwd).toBe('dasdqwq122');
      expect(result).toHaveLength(1);
      expect(result).toEqual([{ id: 1, name: 'Anton', surname: 'Miranovich', email: '12123113edsa', pwd: 'dasdqwq122' }]);
    });
  });
