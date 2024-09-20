const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json()); // Parse incoming JSON requests

// Basic API endpoint
app.get("/", (req, res) => {
  res.send("Hello, API!");
});
app.get("/login", (req, res) => {
  res.send("Hello, Login!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
