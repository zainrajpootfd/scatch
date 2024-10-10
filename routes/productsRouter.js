const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async function (req, res) {
  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    // Check if file is uploaded
    if (!req.file || !req.file.buffer) {
      throw new Error("Image file is missing or not uploaded properly");
    }

    let product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });
    req.flash("success", "Product created successfully");
    res.redirect("/owners/admin");
  } catch (err) {
    res.send(err.message);
  }
});
module.exports = router;
