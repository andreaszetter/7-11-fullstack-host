import express from "express";
import loggerMiddleware from "../../controllers/middleware/logger.js"
import errorHandler from "../../controllers/middleware/errorHandler.js";
import pool from "../../models/db.js";
import jwt from "jsonwebtoken";

//!Routes
import airQualityRoute from "./airQualitySensor.js";
import gpsRoute from "./gpsSensor.js";
import pulseRoute from "./pulseSensor.js";
import soundRoute from "./soundSensor.js";
import tempRoute from "./tempSensor.js";
import testErrorRoute from "./testErrorRoute.js"
import deviceRoute from "./device.js";
import companyRoute from "./company.js"
import usersRoute from "./users.js";


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

  export default function handler(req, res) {
    return app(req, res);
  }