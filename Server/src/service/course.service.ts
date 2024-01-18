import ExceptionType from '../helper/exception';
import { iCourse } from '../interfaces/interfaces';
import { getAllCourseDB, getCourseByIdDB, postCourseDB, updateCourseDB, deleteCourseByIdDB } from '../repository/course.repository';

async function getAllCourse(): Promise<iCourse[]> {
  const data = await getAllCourseDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_COURSES_NOT_FOUND);
  return data;
}

async function getCourseById(id: number): Promise<iCourse[]> {
  const data = await getCourseByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET_COURSES_BY_ID_NOT_FOUND);
  return data;
}

async function postCourse(course: string): Promise<iCourse[]> {
  const data = await postCourseDB(course);
  if (!data.length) throw new Error(ExceptionType.DB_POST_COURSES_NOT_UPDATE);
  return data;
}

async function updateCourse(id: number, course: string): Promise<iCourse[]> {
  const data = await updateCourseDB(id, course);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_COURSES_NOT_UPDATE);
  return data;
}

async function deleteCourseById(id: number): Promise<iCourse[]> {
  const data = await deleteCourseByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_COURSE_NOT_DELETE);
  return data;
}

export { getAllCourse, getCourseById, postCourse, updateCourse, deleteCourseById };
