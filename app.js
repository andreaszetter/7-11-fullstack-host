import express from "express";

//!Routes
import airQualityRoute from "./api/routes/airQualitySensor.js";
import movementRoute from "./api/routes/movementSensor.js";
import pulseRoute from "./api/routes/pulseSensor.js";
import soundRoute from "./api/routes/soundSensor.js";
import tempRoute from "./api/routes/tempSensor.js";

//! Code
const app = express();
app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
  app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
  });

  app.use(express.json());
  app.use("/api/airQuality", airQualityRoute);
  app.use("/api/movement", movementRoute);
  app.use("/api/pulse", pulseRoute);
  app.use("/api/sound", soundRoute);
  app.use("/api/temp", tempRoute);
});
export default app;
