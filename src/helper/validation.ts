import ExceptionType from '../helper/exception';

function isValidUserBody(req, res, next) {
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error(ExceptionType.USERS_TITLE_EMPTY);
  if (!surname) throw new Error(ExceptionType.USERS_TITLE_EMPTY);
  if (!email) throw new Error(ExceptionType.USERS_TITLE_EMPTY);
  if (!pwd) throw new Error(ExceptionType.USERS_TITLE_EMPTY);
  if (!isNaN(name)) throw new Error(ExceptionType.USERS_NAME_INVALID);
  if (!isNaN(surname)) throw new Error(ExceptionType.USERS_SURNAME_INVALID);
  if (pwd.length < 8) throw new Error(ExceptionType.USERS_PASSWORD_LENGTH_VALID);
  if (!/^[A-z0-9\\\/\-\_\@]+(\@)(gmail|yandex|google|gmail|mail|vk)(.com|.ru|.by|.net)$/gm.test(email))
    throw new Error(ExceptionType.USERS_PASSWORD_VALID);
  next();
}

function isValidId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error(ExceptionType.ID_NOT_A_NUMBER);
  if (id < 1) throw new Error(ExceptionType.ID_NEGATIVE);

  next();
}

function isValidCoursesBody(req, res, next) {
  const { course } = req.body;
  if (!course) throw new Error(ExceptionType.COURSES_TITLE_EMPTY);
  if (!isNaN(course)) throw new Error(ExceptionType.COURSES_NAME_INVALID);
  next();
}

export { isValidUserBody, isValidId, isValidCoursesBody };
