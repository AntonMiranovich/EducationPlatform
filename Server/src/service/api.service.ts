import { iUser } from '../interfaces/interfaces';
import ExceptionType from '../helper/exception';
import bcrypt from 'bcrypt';
import { getUserByEmail, registrationUserDB } from '../repository/api.repository';

async function registrationUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const foundUser = await getUserByEmail(email);
  if (foundUser.length) throw new Error(ExceptionType.API_TITLE_EMPTY);

  const salt = 10;

  const hashPwd = await bcrypt.hash(pwd, salt);
  const data = await registrationUserDB(name, surname, email, hashPwd);
  if (!data.length) throw new Error(ExceptionType.API_EMAIL_NOT_CREATE);
  return data;
}

async function authUser(email: string, pwd: string): Promise<iUser[]> {
  const user = await getUserByEmail(email);
  if (!user.length) throw new Error(ExceptionType.API_EMAIL_NOT_CREATE);

  if (!(await bcrypt.compare(pwd, user[0].pwd))) throw new Error(ExceptionType.API_NOT_CHACK_PASSWORD);
  return user;
}

export { registrationUser, authUser };
