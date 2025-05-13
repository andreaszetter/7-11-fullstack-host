// models/setupDb.js
import pool from "./db.js";

export async function setupTables() {
  const createTablesQuery = `
    CREATE TABLE "device" (
  "id" SERIAL PRIMARY KEY,
  "device" VARCHAR(30),
  "airquality_id" INT,
  "temperature_id" INT,
  "soundlevel_id" INT,
  "position_id" INT,
  "pulse_id" INT
);

CREATE TABLE "admin" (
  "id" SERIAL PRIMARY KEY,
  "company_id" INT,
  "firstname" VARCHAR(50),
  "surname" VARCHAR(50),
  "password_hash" VARCHAR(255),
  "email" VARCHAR(100) UNIQUE,
  "phonenumber" INTEGER UNIQUE,
  "users_id" INT
);

CREATE TABLE "company" (
  "id" SERIAL PRIMARY KEY,
  "company_name" TEXT
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "company_id" INT,
  "firstname" VARCHAR(50),
  "surname" VARCHAR(50),
  "password_hash" VARCHAR(255),
  "email" VARCHAR(100) UNIQUE,
  "phonenumber" INTEGER UNIQUE,
  "device_id" INT
);

CREATE TABLE "airquality" (
  "id" SERIAL PRIMARY KEY,
  "smoke" DECIMAL(9,2),
  "propane" DECIMAL(9,2),
  "co2" DECIMAL(9,2),
  "created_at" TIMESTAMP DEFAULT (now())
);

CREATE TABLE "temperature" (
  "id" SERIAL PRIMARY KEY,
  "temperature" DECIMAL(5,2),
  "created_at" TIMESTAMP DEFAULT (now())
);

CREATE TABLE "soundlevel" (
  "id" SERIAL PRIMARY KEY,
  "sound" INT,
  "created_at" TIMESTAMP DEFAULT (now())
);

CREATE TABLE "position" (
  "id" SERIAL PRIMARY KEY,
  "latitude" DECIMAL(9,6),
  "longitude" DECIMAL(9,6),
  "created_at" TIMESTAMP DEFAULT (now())
);

CREATE TABLE "pulse" (
  "id" SERIAL PRIMARY KEY,
  "pulse" INT,
  "created_at" TIMESTAMP DEFAULT (now())
);

ALTER TABLE "device" ADD FOREIGN KEY ("airquality_id") REFERENCES "airquality" ("id");

ALTER TABLE "device" ADD FOREIGN KEY ("temperature_id") REFERENCES "temperature" ("id");

ALTER TABLE "device" ADD FOREIGN KEY ("soundlevel_id") REFERENCES "soundlevel" ("id");

ALTER TABLE "device" ADD FOREIGN KEY ("position_id") REFERENCES "position" ("id");

ALTER TABLE "device" ADD FOREIGN KEY ("pulse_id") REFERENCES "pulse" ("id");

ALTER TABLE "admin" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id");

ALTER TABLE "admin" ADD FOREIGN KEY ("users_id") REFERENCES "users" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("device_id") REFERENCES "device" ("id");
    `;

  try {
    await pool.query(createTablesQuery);
    console.log("✅ Alla tabeller är skapade (om de inte redan fanns).");
  } catch (error) {
    console.error("❌ Fel vid skapande av tabeller:", error);
  }
}