import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await req.pool.query("SELECT * FROM soundlevel;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { sound } = req.body;
  const result = await req.pool.query(
    "INSERT INTO soundlevel (sound) VALUES ($1) RETURNING *;",
    [sound]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
