module.exports = __baseUrl = __dirname;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const config = require("./lib/config");

// Setting express static file
app.use(express.static("public"));

// Setting view engine ejs
app.set("views", config.VIEWS);
app.set("view engine", config.VIEW_ENGINE);

// Setting body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Test Ejs
app.get("/", (req, res) => {
  res.render("test");
});

// Test connection
// const sequelize = require("./lib/connect");
app.listen(config.PORT, () => {
  console.log("Server running on port " + config.PORT);
});
