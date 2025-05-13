import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await req.pool.query("SELECT * FROM position;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { latitude, longitude } = req.body;
  const result = await req.pool.query(
    "INSERT INTO position (latitude, longitude) VALUES ($1, $2) RETURNING *;",
    [latitude, longitude]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
