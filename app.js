const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// running express
const app = express();

// parsing the body
app.use(bodyParser.urlencoded({ extended: false }));

// alloc the access to the oubluc forlder
app.use(express.static(path.join(__dirname, "public")));

// creating the middleware for admin
app.use("/admin", adminRoutes);

// create the routes for the shop
app.use(shopRoutes);

// adding the 404 error (this route will catch all the requests)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // res.status(404).send("<h1>404 Page not found</h1>");
});

// set the port
app.listen(3000);

/**
 * get => use the exact path
 * use => you must (pai attention to the order)
 */
