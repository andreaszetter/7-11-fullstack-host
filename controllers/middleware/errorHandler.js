import { timeStamp } from "console";
import fs from "fs";
const errorLogStream = fs.createWriteStream("error.log", {flags:"a"});
const errorHandler = (err,req,res,next)=>{
    const errorMessage = {
        timeStamp: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl,
        message: err.message,
        status: err.status || 500
    }
    errorLogStream.write(JSON.stringify(errorMessage) + "\n");
    res.status(err.status || 500).json(
        {
        message: "an internal server error",
        details: "please try again later"

    });
}

export default errorHandler