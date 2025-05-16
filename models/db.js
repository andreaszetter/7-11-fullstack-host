import { Pool } from "pg";

const pool = new Pool({
  connectionString: procces.env.DATABASE_URL
});
export default pool;
