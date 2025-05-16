// models/setupDb.js
import pool from "./db.js";

export async function setupTables() {
  const createTablesQuery = `
    -- Main tables
    CREATE TABLE IF NOT EXISTS "company" (
      "id" SERIAL PRIMARY KEY,
      "company_name" TEXT
    );

    CREATE TABLE IF NOT EXISTS "device" (
      "id" VARCHAR(150) PRIMARY KEY
    );

    CREATE TABLE IF NOT EXISTS "users" (
      "id" SERIAL PRIMARY KEY,
      "company_id" INT,
      "firstname" VARCHAR(50),
      "surname" VARCHAR(50),
      "password_hash" VARCHAR(255),
      "email" VARCHAR(100) UNIQUE,
      "phonenumber" INTEGER UNIQUE,
      "device_id" VARCHAR(150),
      "role" TEXT DEFAULT 'user'
    );

    CREATE TABLE IF NOT EXISTS "airquality" (
      "id" SERIAL PRIMARY KEY,
      "device_id" VARCHAR(150),
      "smoke" DECIMAL(9,2),
      "propane" DECIMAL(9,2),
      "co2" DECIMAL(9,2),
      "created_at" TIMESTAMP DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS "temperature" (
      "id" SERIAL PRIMARY KEY,
      "device_id" VARCHAR(150),
      "temperature" DECIMAL(5,2),
      "created_at" TIMESTAMP DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS "soundlevel" (
      "id" SERIAL PRIMARY KEY,
      "device_id" VARCHAR(150),
      "sound" INT,
      "created_at" TIMESTAMP DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS "position" (
      "id" SERIAL PRIMARY KEY,
      "device_id" VARCHAR(150),
      "latitude" DECIMAL(9,6),
      "longitude" DECIMAL(9,6),
      "created_at" TIMESTAMP DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS "pulse" (
      "id" SERIAL PRIMARY KEY,
      "device_id" VARCHAR(150),
      "pulse" INT,
      "created_at" TIMESTAMP DEFAULT now()
    );

    -- Foreign keys (added after all tables are defined)
    ALTER TABLE "users"
      ADD CONSTRAINT fk_users_company
      FOREIGN KEY ("company_id") REFERENCES "company" ("id"),
      ADD CONSTRAINT fk_users_device
      FOREIGN KEY ("device_id") REFERENCES "device" ("id");

    ALTER TABLE "airquality"
      ADD CONSTRAINT fk_airquality_device
      FOREIGN KEY ("device_id") REFERENCES "device" ("id");

    ALTER TABLE "temperature"
      ADD CONSTRAINT fk_temperature_device
      FOREIGN KEY ("device_id") REFERENCES "device" ("id");

    ALTER TABLE "soundlevel"
      ADD CONSTRAINT fk_soundlevel_device
      FOREIGN KEY ("device_id") REFERENCES "device" ("id");

    ALTER TABLE "position"
      ADD CONSTRAINT fk_position_device
      FOREIGN KEY ("device_id") REFERENCES "device" ("id");

    ALTER TABLE "pulse"
      ADD CONSTRAINT fk_pulse_device
      FOREIGN KEY ("device_id") REFERENCES "device" ("id");
  `;

  try {
    await pool.query(createTablesQuery);
    console.log("✅ Alla tabeller och constraints är skapade.");
  } catch (error) {
    console.error("❌ Fel vid skapande av tabeller eller constraints:", error.message);
  }
}


export default setupTables;