import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "orders were fetched",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "order was created",
  });
});

router.get("/sensorId/:id", (req, res, next) => {
  res.status(200).json({
    message: "Store data from sensor",
    sensorId: req.params.sensorId,
  });
});

router.patch("(sensorId/:id", (req, res, next) => {
  res.status(200).json({
    message: "patch the sensor",
    sensorId: req.params.sensorId,
  });
});

router.delete("/sensorId/:id", (req, res, next) => {
  res.status(200).json({
    message: "Order DELETED",
    sensorId: req.params.sensorId,
  });
});
export default router;
