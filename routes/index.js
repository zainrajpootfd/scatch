const express = require("express");

const router = express.router();

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
