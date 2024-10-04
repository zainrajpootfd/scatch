const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

// Only for development environment
if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(500).send("Only one owner can be created");
    }
    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.send(createdOwner);
  });
}

router.get("/", function (req, res) {
  res.send("hey");
});

module.exports = router;
