import express, { Request, Response } from 'express';
import { getAllUser, getUserById,createUser, updateUser, deleteUser } from '../service/user.service';
import buildResponse from '../helper/buildResponse';
import { isValidUserBody, isValidId } from '../helper/validation';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUser();
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidId, async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/',async(req: Request, res: Response)=>{
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd)
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
})

route.put('/:id', isValidId, isValidUserBody, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidId, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
