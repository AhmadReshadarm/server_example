//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var resualt = num1 / Math.pow(num1, 2);

  res.send("the resualt is " + resualt);

});

app.listen(3000, function() {

  console.log("the server is runing on port 3000");

});
