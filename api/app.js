import express from "express";
import pool from "../models/db.js";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

//!Routes
import airQualityRoute from "./routes/airQualitySensor.js";
import gpsRoute from "./routes/gpsSensor.js";
import pulseRoute from "./routes/pulseSensor.js";
import soundRoute from "./routes/soundSensor.js";
import tempRoute from "./routes/tempSensor.js";
import testErrorRoute from "./routes/testErrorRoute.js"
import deviceRoute from "./routes/device.js";
import companyRoute from "./routes/company.js"
import usersRoute from "./routes/users.js";



//! Code
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

app.use("/api/users", usersRoute);
app.use("/error", testErrorRoute)


app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.use("/api/airQuality", airQualityRoute);
app.use("/api/gps", gpsRoute);
app.use("/api/pulse", pulseRoute);
app.use("/api/sound", soundRoute);
app.use("/api/temp", tempRoute);
app.use("/api/device", deviceRoute);
app.use("/api/company", companyRoute);


export default app;

