import express from "express";
const router = express.Router();


router.get("/", async (req, res, next) => {
  try {
    const result = await req.pool.query("SELECT * FROM position");
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

//Get latest sensor value
router.get("/:id/latest-data", async (req, res, next) => {

  const { id } = req.params;

  try {
    const result = await req.pool.query(`
      SELECT 
        $1 AS device_id,
        (SELECT longitude FROM position WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_longitude,
        (SELECT latitude FROM position WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_latitude,
        (SELECT created_at FROM position WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_timestamp
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No data found for device '${id}'` });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error in GET /gps/:id/latest-data", err);
    next(err);
  }
});

//Get latest 50 sensor values
router.get("/:id/trend", async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await req.pool.query(`
      SELECT longitude, latitude, created_at
      FROM position
      WHERE device_id = $1
      ORDER BY created_at DESC
      LIMIT 50
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No gps trend found for device '${id}'` });
    }

    res.status(200).json({
      device_id: id,
      trend: result.rows
    });
  } catch (err) {
    console.error("❌ Error in GET /gps/:id/trend", err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { device_id, latitude, longitude } = req.body;
  try {
    const result = await req.pool.query(
      `INSERT INTO position (device_id, latitude, longitude)
       VALUES ($1, $2, $3) RETURNING *`,
      [device_id, latitude, longitude]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
