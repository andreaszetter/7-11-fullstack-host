import express from "express";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await req.pool.query("SELECT * FROM soundlevel");
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/latest-data", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await req.pool.query(`
      SELECT 
        $1 AS device_id,
        (SELECT sound FROM soundlevel WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_sound,
        (SELECT created_at FROM soundlevel WHERE device_id = $1 ORDER BY created_at DESC LIMIT 1) AS latest_timestamp
    `, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No sound data found for device '${id}'` });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error in GET /sound/:id/latest-data", err);
    next(err);
  }
});

router.get("/:id/trend", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await req.pool.query(`
      SELECT sound, created_at
      FROM soundlevel
      WHERE device_id = $1
      ORDER BY created_at DESC
      LIMIT 50
    `, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: `No sound trend found for device '${id}'` });
    }
    res.status(200).json({ device_id: id, trend: result.rows });
  } catch (err) {
    console.error("❌ Error in GET /sound/:id/trend", err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { device_id, sound } = req.body;
  try {
    const result = await req.pool.query(
      `INSERT INTO soundlevel (device_id, sound)
       VALUES ($1, $2) RETURNING *`,
      [device_id, sound]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
