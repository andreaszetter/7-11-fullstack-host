import express from "express";
import loggerMiddleware from "./controllers/middleware/logger.js"
import errorHandler from "./controllers/middleware/errorHandler.js";


//!Routes
import airQualityRoute from "./api/routes/airQualitySensor.js";
import gpsRoute from "./api/routes/gpsSensor.js";
import pulseRoute from "./api/routes/pulseSensor.js";
import soundRoute from "./api/routes/soundSensor.js";
import tempRoute from "./api/routes/tempSensor.js";
import testErrorRoute from "./api/routes/testErrorRoute.js"


//! Code
const app = express();
app.use(express.json());
app.use(loggerMiddleware);


  app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
  });
  



  app.use("/error", testErrorRoute)
  app.use("/api/airQuality", airQualityRoute);
  app.use("/api/gps", gpsRoute);
  app.use("/api/pulse", pulseRoute);
  app.use("/api/sound", soundRoute);
  app.use("/api/temp", tempRoute);
  app.use(errorHandler);
  

export default app;
