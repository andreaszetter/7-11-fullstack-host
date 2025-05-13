import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await req.pool.query("SELECT * FROM company;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { company_name } = req.body;
  const result = await req.pool.query(
    "INSERT INTO company (company_name) VALUES ($1) RETURNING *;",
    [company_name]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
