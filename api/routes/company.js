import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await req.pool.query("SELECT * FROM company");
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { company_name } = req.body;
  try {
    const result = await req.pool.query(
      `INSERT INTO company (company_name) VALUES ($1) RETURNING *`,
      [company_name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
