import { Pool } from "pg";

const pool = new Pool({
  connectionString: procces.env.CONNECTION_STRING
});
export default pool;
