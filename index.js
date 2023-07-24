const express = require("express");
const port = 8000;
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  return res.render("home");
});
app.get("/profile", function (req, res) {
  return res.render("profile");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in page : ", err);
    return;
  }
  console.log("Yup!, Express is working on port : ", port);
});
