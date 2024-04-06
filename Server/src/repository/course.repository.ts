import pool from '../db';
import { iCourse } from '../interfaces/interfaces';

async function getAllCourseDB(): Promise<iCourse[]> {
  const client = await pool.connect();
  const sql = 'select * from courses';
  const data = (await client.query(sql)).rows;
  client.release();
  return data;
}

async function getCourseByIdDB(id: number): Promise<iCourse[]> {
  const client = await pool.connect();
  const sql = 'select * from courses where id=$1';
  const data = (await client.query(sql, [id])).rows;
  client.release();
  return data;
}

async function postCourseDB(course: string, description: string): Promise<iCourse[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'insert into courses (course,description) values ($1,$2) returning *';
    const data = (await client.query(sql, [course, description])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`postCourseDB:${error.message}`);
    return [];
  } finally {
    client.release();
  }
}

async function updateCourseDB(id: number, course: string, description: string): Promise<iCourse[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'update courses set course=$1, description=$2 where id=$3 returning*';
    const data = (await client.query(sql, [course, description, id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`updateCourseDB:${error.message}`);
    return [];
  }
}

async function deleteCourseByIdDB(id: number): Promise<iCourse[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `delete from courses where id=$1 returning *`;
    const data = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`deleteCourseByIdDB:${error.message}`);
    return [];
  }
}

export { getAllCourseDB, getCourseByIdDB, postCourseDB, updateCourseDB, deleteCourseByIdDB };
