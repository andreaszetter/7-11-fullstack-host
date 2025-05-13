import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await req.pool.query("SELECT * FROM pulse;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { pulse } = req.body;
  const result = await req.pool.query(
    "INSERT INTO pulse (pulse) VALUES ($1) RETURNING *;",
    [pulse]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
