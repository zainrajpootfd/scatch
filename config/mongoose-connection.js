const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Could not connect to MongoDB:", error);
  });
module.exports = mongoose.connection;
