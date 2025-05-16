import express from "express";
import deviceAccessMiddleware from "../../controllers/middleware/deviceAccessMiddleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res, next) => {
  try {
    const result = await req.pool.query("SELECT * FROM device");
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/latest-data", deviceAccessMiddleware, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await req.pool.query(`
      SELECT 
        $1 AS device_id,
        (SELECT temperature FROM temperature WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_temperature,
        (SELECT pulse FROM pulse WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_pulse,
        (SELECT smoke FROM airquality WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_smoke,
        (SELECT propane FROM airquality WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_propane,
        (SELECT co2 FROM airquality WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_co2,
        (SELECT sound FROM soundlevel WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_sound,
        (SELECT latitude FROM position WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_latitude,
        (SELECT longitude FROM position WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_longitude,
        (SELECT created_at FROM position WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_timestamp
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No data found for device '${id}'` });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error in GET /device/:id/latest-data", err);
    next(err);
  }
});

//Get latest 50 sensor values
router.get("/:id/trend", async (req, res, next) => {
  const { id } = req.params;

  try {
    const temperatureQuery = req.pool.query(`
      SELECT temperature, created_at FROM temperature
      WHERE device_id = $1 ORDER BY created_at DESC LIMIT 50
    `, [id]);

    const airQuery = req.pool.query(`
      SELECT smoke, propane, co2, created_at FROM airquality
      WHERE device_id = $1 ORDER BY created_at DESC LIMIT 50
    `, [id]);

    const pulseQuery = req.pool.query(`
      SELECT pulse, created_at FROM pulse
      WHERE device_id = $1 ORDER BY created_at DESC LIMIT 50
    `, [id]);

    const positionQuery = req.pool.query(`
      SELECT latitude, longitude, created_at FROM position
      WHERE device_id = $1 ORDER BY created_at DESC LIMIT 50
    `, [id]);

    const soundQuery = req.pool.query(`
      SELECT sound, created_at FROM soundlevel
      WHERE device_id = $1 ORDER BY created_at DESC LIMIT 50
    `, [id]);

    const [temperature, airquality, pulse, position, soundlevel] = await Promise.all([
      temperatureQuery, airQuery, pulseQuery, positionQuery, soundQuery
    ]);

    res.status(200).json({
      device_id: id,
      trend: {
        temperature: temperature.rows,
        airquality: airquality.rows,
        pulse: pulse.rows,
        position: position.rows,
        soundlevel: soundlevel.rows
      }
    });
  } catch (err) {
    console.error("❌ Error in GET /device/:id/trend", err);
    next(err);
  }
});


router.post("/", async (req, res, next) => {
  const { id } = req.body;
  try {
    const result = await req.pool.query(
      `INSERT INTO device (id) VALUES ($1) RETURNING *`,
      [id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
