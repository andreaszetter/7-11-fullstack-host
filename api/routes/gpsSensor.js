import express from "express";
const router = express.Router();
const gpsValues = [
  {
    id : new Date().toISOString(),
    latitude: "float",
    longtitude: "float"
  }
]
router.get("/", async (req, res ) => {
  const result = await req.pool.query("SELECT * FROM position;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { latitude,longtitude } = req.body;
  const result = await req.pool.query("INSERT INTO position (latitude,longtitude) VALUES ($1, $2) RETURNING *;", [latitude, longtitude]);
  res.status(201).json(result.rows[0]);
});

export default router;
