import ExceptionType from '../helper/exception';
import { iCourse } from '../interfaces/interfaces';
import {getAllCourseDB,getCourseByIdDB} from '../repository/course.repository'

async function getAllCourse():Promise<iCourse[]> {
  const data =await getAllCourseDB();
  if (!data.length) throw new Error('no data');
  return data;
}

async function getCourseById(id:number):Promise<iCourse[]>{
    const data =await getCourseByIdDB(id);
    if (!data.length) throw new Error('no data');
    return data;
}

export { getAllCourse,getCourseById };
