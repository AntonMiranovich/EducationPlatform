interface iUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  pwd: string;
}

interface iCourse {
  id: number;
  course: string;
  description: string
}

export { iUser, iCourse };
