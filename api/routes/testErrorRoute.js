import express from "express";
const router = express.Router();

router.get("/",(req,res)=>{
    throw new Error("TEST ERROR");
    
})

export default router