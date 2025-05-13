import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await req.pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { company_id, firstname, surname, password_hash, email, phonenumber, device_id, role } = req.body;
  try {
    const result = await req.pool.query(
      `INSERT INTO users (company_id, firstname, surname, password_hash, email, phonenumber, device_id, role)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [company_id, firstname, surname, password_hash, email, phonenumber, device_id, role || 'user']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
