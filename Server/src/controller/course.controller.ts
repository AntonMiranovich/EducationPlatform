import express, { Request, Response } from 'express';
import buildResponse from '../helper/buildResponse';
import { getAllCourse, getCourseById, postCourse, updateCourse, deleteCourseById } from '../service/course.service';
import { isValidId, isValidCoursesBody } from '../helper/validation';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllCourse();
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidId, async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getCourseById(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidCoursesBody, async (req: Request, res: Response): Promise<void> => {
  try {
    const { course,description } = req.body;
    const data = await postCourse(course,description);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidId, isValidCoursesBody, async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { course,description } = req.body;
    const data = await updateCourse(id, course,description);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidId, async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteCourseById(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
