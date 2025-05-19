import app from "./app.js";
import setupSwagger from "../docs/swagger.js";
import setupTables from "../models/setupDB.js";

setupSwagger(app);

export default async function handler(req, res) {
  // Set up tables if not already set
  await setupTables();

  // Handle requests
  app(req, res);

}

