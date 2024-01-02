import { deleteCourseById, getAllCourse, getCourseById, postCourse, updateCourse } from '../../service/course.service';
import * as repository from '../../repository/course.repository';
import ExceptionType from '../../helper/exception';

describe('getAllCourse', () => {
  test('test 1', async () => {
    const repFunction = jest.spyOn(repository, 'getAllCourseDB');
    repFunction.mockResolvedValue([
      { id: 1, course: 'TS' },
      { id: 2, course: 'JS' },
    ]);
    const result = await getAllCourse();

    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
    expect(result[0].course).toBe('TS');
    expect(result[1].course).toBe('JS');
    expect(result).toEqual([
      { id: 1, course: 'TS' },
      { id: 2, course: 'JS' },
    ]);
    expect(result).toHaveLength(2);
  });

  test('test 2', async () => {
    const repFunction = jest.spyOn(repository, 'getAllCourseDB');
    repFunction.mockResolvedValue([]);
    try {
      await getAllCourse();
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_GET_COURSES_NOT_FOUND);
    }
  });
});

describe('getCoursesById', () => {
  test('test success', async () => {
    const repFunction = jest.spyOn(repository, 'getCourseByIdDB');
    repFunction.mockResolvedValue([
      {
        id: 1,
        course: 'TS',
      },
    ]);
    const result = await getCourseById(1);

    expect(result[0].id).toBe(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result).toEqual([
      {
        id: 1,
        course: 'TS',
      },
    ]);
  });

  test('test error', async () => {
    const repFunction = jest.spyOn(repository, 'getCourseByIdDB');
    repFunction.mockResolvedValue([]);
    try {
      await getCourseById(2);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_GET_COURSES_BY_ID_NOT_FOUND);
    }
  });
});

describe('postCourse', () => {
  test('test postCourse', async () => {
    const repFunction = jest.spyOn(repository, 'postCourseDB');
    repFunction.mockResolvedValue([
      {
        id: 1,
        course: 'TS',
      },
    ]);
    const result = await postCourse('TS');

    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
    expect(result).toEqual([
      {
        id: 1,
        course: 'TS',
      },
    ]);
    expect(result).toHaveLength(1);
  });

  test('test post error', async () => {
    const repFunction = jest.spyOn(repository, 'postCourseDB');
    repFunction.mockResolvedValue([]);
    try {
      await postCourse('TS');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_POST_COURSES_NOT_UPDATE);
    }
  });
});

describe('test updateCourse', () => {
  test('return success', async () => {
    const repFunction = jest.spyOn(repository, 'updateCourseDB');
    repFunction.mockResolvedValue([
      {
        id: 1,
        course: 'TS',
      },
    ]);
    const result = await updateCourse(1, 'TS');

    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
    expect(result).toEqual([
      {
        id: 1,
        course: 'TS',
      },
    ]);
  });

  test('test return Error', async () => {
    const repFunction = jest.spyOn(repository, 'updateCourseDB');
    repFunction.mockResolvedValue([]);
    try {
      await updateCourse(1, 'TS');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_PUT_COURSES_NOT_UPDATE);
    }
  });
});

describe('deleteCourseById', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'deleteCourseByIdDB');
    repFunction.mockResolvedValue([{ id: 1, course: 'TS' }]);
    const result = await deleteCourseById(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
    expect(result).toEqual([
      {
        id: 1,
        course: 'TS',
      },
    ]);
    expect(result).toHaveLength(1);
  });
  
  test('test return Error', async () => {
    const repFunction = jest.spyOn(repository, 'deleteCourseByIdDB');
    repFunction.mockResolvedValue([]);
    try {
      await deleteCourseById(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_DELETE_COURSE_NOT_DELETE);
    }
  });
});
