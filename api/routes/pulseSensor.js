import express from "express";
const router = express.Router();
const pulseValues = [
  {
    id : new Date().toISOString(),
    pulse: "interger aka heltal"
  }
]
router.get("/", (req, res ) => {
  res.status(200).json({
    message: "values were fetched",
    value : pulseValues
  });
});

router.post("/", (req, res) => {
  const { pulse } = req.body; 
  const responseData = {
    id: new Date().toISOString(),
    pulse
  };

  res.status(201).json({
    message: "values recieved",
    data: responseData 
  });
  pulseValues.push(responseData)
});

export default router;
