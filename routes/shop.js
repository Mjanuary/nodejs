const path = require("path");
const express = require("express");

const router = express.Router();

// My imports
const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  console.log("shop.js: ", adminData.products);
});

module.exports = router;
