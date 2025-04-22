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

router.get("/:sensorId", (req, res, next) => {
  res.status(200).json({
    message: "order details on the id",
    sensorId: req.params.sensorId,
  });
});

router.delete("/:sensorId", (req, res, next) => {
  res.status(200).json({
    message: "Order DELETED",
    sensorId: req.params.sensorId,
  });
});
export default router;
