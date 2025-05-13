import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await req.pool.query("SELECT * FROM temperature;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { temperature } = req.body;
  const result = await req.pool.query(
    "INSERT INTO temperature (temperature) VALUES ($1) RETURNING *;",
    [temperature]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
