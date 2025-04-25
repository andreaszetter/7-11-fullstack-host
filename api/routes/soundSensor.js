import express from "express";
const router = express.Router();
const soundValues = [
  {
    id : new Date().toISOString(),
    soundLevel : "float"
  }
]
router.get("/", (req, res ) => {
  res.status(200).json({
    message: "values were fetched",
    value : soundValues
  });
});

router.post("/", (req, res) => {
  const { soundLevel } = req.body; 
  const responseData = {
    id: new Date().toISOString(),
    soundLevel : "float"
  };

  res.status(201).json({
    message: "values recieved",
    data: responseData 
  });
  soundValues.push(responseData)
});

export default router;
