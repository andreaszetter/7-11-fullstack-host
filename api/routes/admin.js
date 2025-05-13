import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await req.pool.query("SELECT * FROM admin;");
  res.json(result.rows);
});

router.post("/", async (req, res) => {
  const {
    company_id,
    firstname,
    surname,
    password_hash,
    email,
    phonenumber,
    users_id,
  } = req.body;
  const result = await req.pool.query(
    `INSERT INTO admin 
    (company_id, firstname, surname, password_hash, email, phonenumber, users_id) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
    [
      company_id,
      firstname,
      surname,
      password_hash,
      email,
      phonenumber,
      users_id,
    ]
  );
  res.status(201).json(result.rows[0]);
});

export default router;
