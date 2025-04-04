import express from "express";
import fs from "fs";
// import dotenv from "dotenv";
const app = express();
const PORT = 8080;

app.get("/", (req, res, next) => {
    console.log("Hello there");
    next(); 
  });

app.get("/yomama",(req,res)=>{
res.send("hello world")
})



//! Pulse sensor
app.get("/api/pulse",(req,res)=>{});
app.post("",(req,res)=>{});

//! Movement sensor
app.get("/api/movement",(req,res)=>{});
app.post("",(req,res)=>{});


//! AirQuality sensor
app.get("/api/air",(req,res)=>{});
app.post("",(req,res)=>{});


//! Sound sensor
app.get("/api/sound",(req,res)=>{});
app.post("",(req,res)=>{});


//! Temp sensor
app.get("/api/temp",(req,res)=>{});
app.post("",(req,res)=>{});


//! Use dis for storing data from ALL sensors
app.post("/api/sensor",(req,res)=>{

})
//! Current reading state of the sensor
app.get("/api/live",(req,res)=>{

})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/yomama`);
    
})
