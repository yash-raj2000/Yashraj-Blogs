const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const pool = require("./database");

app.use(cors());
app.use(express.json());

const port = process.env.DB_PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server Running - Admin Panel");
});

app.get("/getBlogs", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blogadata");
    res.json(result);
  } catch (error) {
    console.error("Error Fetching Blogs", error);
  }
});

app.get(`/getBlogs/${id}`, async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM blogadata WHERE id = ${id}`);
    res.json(result);
  } catch (error) {
    console.error("Error Fetching Blogs", error);
  }
});

app.post("/postBlog", async (req, res) => {
  try {
    const { date, category, title, content } = req.body;
    const result = await pool.query(
      "INSERT INTO blogadata (date, category, title, content) VALUES ($1, $2, $3, $4) RETURNING *",
      [date, category, title, content]
    );
    console.log(result);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on  port ${port}`);
});
