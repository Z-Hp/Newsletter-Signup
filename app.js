const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  var userName = req.body.userName;
  var userEmail = req.body.userEmail;
  console.log(userName, userEmail);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
