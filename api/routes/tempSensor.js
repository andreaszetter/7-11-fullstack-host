import express from "express";
const router = express.Router();
const temperatureValues = [
  {
    id : new Date().toISOString(),
    temperature : "float"
  }
]
router.get("/", async (req, res ) => {
  const result = await req.pool.query("SELECT * FROM temperature;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { smoke,propane,co2 } = req.body;
  const result = await req.pool.query("INSERT INTO temperature (temperature) VALUES ($1) RETURNING *;", [temperature]);
  res.status(201).json(result.rows[0]);
});

export default router;
