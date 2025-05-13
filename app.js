import express from "express";
import loggerMiddleware from "./controllers/middleware/logger.js"
import errorHandler from "./controllers/middleware/errorHandler.js";
import pool from "./models/db.js";

//!Routes
import airQualityRoute from "./api/routes/airQualitySensor.js";
import gpsRoute from "./api/routes/gpsSensor.js";
import pulseRoute from "./api/routes/pulseSensor.js";
import soundRoute from "./api/routes/soundSensor.js";
import tempRoute from "./api/routes/tempSensor.js";
import testErrorRoute from "./api/routes/testErrorRoute.js"
import deviceRoute from "./api/routes/device.js";
import companyRoute from "./api/routes/company.js"
import usersRoute from "./api/routes/users.js";


//! Code
const app = express();
app.use(express.json());
app.use(loggerMiddleware);
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

  app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
  });

  app.use("/error", testErrorRoute)
  app.use("/api/airQuality", airQualityRoute);
  app.use("/api/gps", gpsRoute);
  app.use("/api/pulse", pulseRoute);
  app.use("/api/sound", soundRoute);
  app.use("/api/temp", tempRoute);
  app.use("/api/device", deviceRoute);
  app.use("/api/company", companyRoute);
  app.use("/api/users", usersRoute);

  app.use(errorHandler);

export default app;
