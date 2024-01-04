import { getAllCourseDB, getCourseByIdDB, postCourseDB, updateCourseDB, deleteCourseByIdDB } from '../../repository/course.repository';

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

describe('test getAllCourseDB function', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await getAllCourseDB();

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
  });
});

describe('test getCourseByIdDB', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await getCourseByIdDB(1);

    expect(client.query).toHaveBeenCalled();
    expect(result[0].course).toBe('TS');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
  });
});

describe('test postCourseDB', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await postCourseDB('TS');

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
    expect(result).toHaveLength(1);
  });
});

describe('test updateCourseDB', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 2, course: 'JS' }] });
    const result = await updateCourseDB(2, 'JS');

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(2);
    expect(result[0].course).toBe('JS');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 2, course: 'JS' }]);
  });
});

describe('test deleteCourseByIdDB', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 2, course: 'JS' }] });
    const result = await deleteCourseByIdDB(2);

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(2);
    expect(result[0].course).toBe('JS');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 2, course: 'JS' }]);
  });
});
