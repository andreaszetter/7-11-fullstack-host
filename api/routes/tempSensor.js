import express from "express";
import deviceAccessMiddleware from "../../controllers/middleware/deviceAccessMiddleware.js";
import verifyJWT from "../../controllers/middleware/verifyJWT.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await req.pool.query("SELECT * FROM temperature");
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

//Get latest sensor value
router.get("/:id/latest-data", verifyJWT, deviceAccessMiddleware, async (req, res, next) => {

  const { id } = req.params;

  try {
    const result = await req.pool.query(`
      SELECT 
        $1 AS device_id,
        (SELECT temperature FROM temperature WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_temperature,
        (SELECT created_at FROM temperature WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_timestamp
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No data found for device '${id}'` });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error in GET /temp/:id/latest-data", err);
    next(err);
  }
});

//Get latest 50 sensor values
router.get("/:id/trend", verifyJWT, deviceAccessMiddleware, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await req.pool.query(`
      SELECT temperature, created_at
      FROM temperature
      WHERE device_id = $1
      ORDER BY created_at DESC
      LIMIT 50
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No temperature trend found for device '${id}'` });
    }

    res.status(200).json({
      device_id: id,
      trend: result.rows
    });
  } catch (err) {
    console.error("❌ Error in GET /temp/:id/trend", err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { device_id, temperature } = req.body;
  try {
    const result = await req.pool.query(
      `INSERT INTO temperature (device_id, temperature)
       VALUES ($1, $2) RETURNING *`,
      [device_id, temperature]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
