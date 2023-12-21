import { Pool } from "pg";

const pool = new Pool({
  password: "2436910",
  database: "educational_platform",
  port: 5432,
  host: "localhost",
  user: "postgres",
});

export default pool;
