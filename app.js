const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(5000, function () {
  console.log("Server is running on port 5000");
});
