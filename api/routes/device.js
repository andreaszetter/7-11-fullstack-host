import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await req.pool.query("SELECT * FROM device;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const {
    device,
    airquality_id,
    temperature_id,
    soundlevel_id,
    position_id,
    pulse_id,
  } = req.body;

  const insertResult = await req.pool.query(
    `INSERT INTO device 
    (device, airquality_id, temperature_id, soundlevel_id, position_id, pulse_id) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [
      device,
      airquality_id,
      temperature_id,
      soundlevel_id,
      position_id,
      pulse_id,
    ]
  );

  const newDevice = insertResult.rows[0];

  const sensorQueries = await Promise.all([
    req.pool.query("SELECT * FROM airquality WHERE id = $1;", [airquality_id]),
    req.pool.query("SELECT * FROM temperature WHERE id = $1;", [
      temperature_id,
    ]),
    req.pool.query("SELECT * FROM soundlevel WHERE id = $1;", [soundlevel_id]),
    req.pool.query("SELECT * FROM position WHERE id = $1;", [position_id]),
    req.pool.query("SELECT * FROM pulse WHERE id = $1;", [pulse_id]),
  ]);

  const sensorValues = {
    airquality: sensorQueries[0].rows[0],
    temperature: sensorQueries[1].rows[0],
    soundlevel: sensorQueries[2].rows[0],
    position: sensorQueries[3].rows[0],
    pulse: sensorQueries[4].rows[0],
  };

  res.status(201).json({
    device: newDevice,
    sensorValues,
  });
});

export default router;
