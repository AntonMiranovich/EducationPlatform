import { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../repository/user.response';
import { iUser } from '../interfaces/interfaces';
import ExceptionType from '../helper/exception';

async function getAllUser(): Promise<iUser[]> {
  const data = await getAllUserDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_USERS_NOT_FOUND);
  return data;
}

async function getUserById(id: number): Promise<iUser[]> {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET_USERS_BY_ID_NOT_FOUND);
  return data;
}

async function updateUser(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const data = await updateUserDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_USERS_NOT_UPDATE);
  return data;
}

async function deleteUser(id: number): Promise<iUser[]> {
  const data = await deleteUserDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_USER_NOT_DELETE);
  return data;
}

export { getAllUser, getUserById, updateUser, deleteUser };
