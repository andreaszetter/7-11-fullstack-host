import express from "express";
const router = express.Router();
const airValues = [
  {
    id : new Date().toISOString(),
    smoke : "float",
    propane : "float",
    co2 : "float"
  }
]
router.get("/", (req, res ) => {
  res.status(200).json({
    message: "values were fetched",
    value : airValues
  });
});

router.post("/", (req, res) => {
  const { smoke,propane,co2 } = req.body; 
  const responseData = {
    id: new Date().toISOString(),
    smoke,
    propane,
    co2
  };

  res.status(201).json({
    message: "values recieved",
    data: responseData 
  });
  airValues.push(responseData)
});

export default router;
