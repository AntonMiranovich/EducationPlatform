interface iExceptionType {
  DB_GET_USERS_NOT_FOUND: string;
  DB_GET_USERS_BY_ID_NOT_FOUND: string;
  DB_PUT_USERS_NOT_UPDATE: string;
  DB_DELETE_USER_NOT_DELETE: string;

  ID_NOT_A_NUMBER: string;
  ID_NEGATIVE: string;

  USERS_TITLE_EMPTY: string;
  USERS_NAME_INVALID: string;
  USERS_SURNAME_INVALID: string;
  USERS_PASSWORD_LENGTH_VALID: string;
  USERS_PASSWORD_VALID: string;

  API_TITLE_EMPTY: string;
  API_EMAIL_NOT_CREATE: string;
  API_NOT_CHACK_PASSWORD: string;

  DB_GET_COURSES_NOT_FOUND: string;
  DB_GET_COURSES_BY_ID_NOT_FOUND: string;
  DB_POST_COURSES_NOT_UPDATE: string;
  DB_PUT_COURSES_NOT_UPDATE: string;
  DB_DELETE_COURSE_NOT_DELETE: string;

  COURSES_TITLE_EMPTY: string;
  COURSES_NAME_INVALID: string;
}

const ExceptionType: iExceptionType = {
  DB_GET_USERS_NOT_FOUND: 'table users is empty',
  DB_GET_USERS_BY_ID_NOT_FOUND: 'users by id is not found',
  DB_PUT_USERS_NOT_UPDATE: 'users does not update',
  DB_DELETE_USER_NOT_DELETE: 'user does not delete',

  ID_NOT_A_NUMBER: 'id is not a number',
  ID_NEGATIVE: 'id should not be negative',

  USERS_TITLE_EMPTY: 'no data',
  USERS_NAME_INVALID: 'incorrect name',
  USERS_SURNAME_INVALID: 'incorrect surname',
  USERS_PASSWORD_LENGTH_VALID: 'the length must be more than 8 characters',
  USERS_PASSWORD_VALID: 'email entered incorrectly',

  API_TITLE_EMPTY: 'no data',
  API_EMAIL_NOT_CREATE: 'email does not create',
  API_NOT_CHACK_PASSWORD: 'password does not match',

  DB_GET_COURSES_NOT_FOUND: 'table courses is empty',
  DB_GET_COURSES_BY_ID_NOT_FOUND: 'courses by id is not found',
  DB_POST_COURSES_NOT_UPDATE: 'courses does not post',
  DB_PUT_COURSES_NOT_UPDATE: 'courses does not update',
  DB_DELETE_COURSE_NOT_DELETE: 'course does not delete',

  COURSES_TITLE_EMPTY: 'no data',
  COURSES_NAME_INVALID: 'incorrect name couse',
};

export default ExceptionType;
