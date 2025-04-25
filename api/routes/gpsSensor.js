import express from "express";
const router = express.Router();
const gpsValues = [
  {
    id : new Date().toISOString(),
    latitude: "float",
    longtitude: "float"
  }
]
router.get("/", (req, res ) => {
  res.status(200).json({
    message: "values were fetched",
    value : gpsValues
  });
});

router.post("/", (req, res) => {
  const { latitude,longtitude } = req.body; 
  const responseData = {
    id: new Date().toISOString(),
    latitude,
    longtitude
  };

  res.status(201).json({
    message: "values recieved",
    data: responseData 
  });
  gpsValues.push(responseData)
});

export default router;
