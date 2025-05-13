import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await req.pool.query("SELECT * FROM airquality;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { smoke, propane, co2 } = req.body;
  const result = await req.pool.query(
    "INSERT INTO airquality (smoke, propane, co2) VALUES ($1, $2, $3) RETURNING *;",
    [smoke, propane, co2]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
