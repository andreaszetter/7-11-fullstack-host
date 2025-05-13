import express from "express";
const router = express.Router();

router.get("/", async (req, res ) => {
  const result = await req.pool.query("");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { } = req.body;
  const result = await req.pool.query("");
  res.status(201).json(result.rows[0]);
});

export default router;
