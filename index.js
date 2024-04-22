var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hello, Welcome to Node.js backend" }');
});

app.get("/will", function (req, res) {
  res.send('{ "response": "Hello 4307 - Yaparathna Y.M.S.K" }');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": " Great!, It works!" }');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening ondfdsf  port 3000!");
});

module.exports = app;
