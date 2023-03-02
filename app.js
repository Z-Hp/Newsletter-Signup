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
  if (userName === "" || userEmail === "") {
    res.sendFile(__dirname + "/failure.html");
  } else {
    res.sendFile(__dirname + "/success.html");
  }
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

// app.post("/success", (req, res) => {
//   res.redirect("/");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
