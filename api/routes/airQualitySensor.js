import express from "express";
import deviceAccessMiddleware from "../../controllers/middleware/deviceAccessMiddleware.js";
import verifyJWT from "../../controllers/middleware/verifyJWT.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await req.pool.query("SELECT * FROM airquality");
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
        (SELECT smoke FROM airquality WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_smoke,
        (SELECT propane FROM airquality WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_propane,
        (SELECT co2 FROM airquality WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_co2,
        (SELECT created_at FROM airquality WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_timestamp
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No data found for device '${id}'` });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error in GET /airquality/:id/latest-data", err);
    next(err);
  }
});

//Get latest 50 sensor values
router.get("/:id/trend", verifyJWT, deviceAccessMiddleware, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await req.pool.query(`
      SELECT smoke, propane, co2, created_at
      FROM airquality
      WHERE device_id = $1
      ORDER BY created_at DESC
      LIMIT 50
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No airquality trend found for device '${id}'` });
    }

    res.status(200).json({
      device_id: id,
      trend: result.rows
    });
  } catch (err) {
    console.error("❌ Error in GET /airquality/:id/trend", err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { device_id, smoke, propane, co2 } = req.body;
  try {
    const result = await req.pool.query(
      `INSERT INTO airquality (device_id, smoke, propane, co2)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [device_id, smoke, propane, co2]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
