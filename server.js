import http from "http";
import app from "./app.js";
import { setupSwagger } from "./docs/swagger.js";


// import dotenv from "dotenv";
const port = process.env.PORT || 8000;
const server = http.createServer(app);
setupSwagger(app)



server.listen(port, () => {
  console.log(`Servern körs på http://localhost:${port}`);
});
