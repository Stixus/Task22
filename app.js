const express = require("express");
var app = express();

var path = require("path");

function pet(name, age, type) {
  this.name = name;
  this.age = age;
  this.type = type;
}

var pets = function() {
  var pet1 = new pet("Spot", 3, "Doge");
  return [pet1];
};

app.use("/static", express.static("images"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname + "/info.html"));
});

app.get("/pictures", (req, res) => {
  res.sendFile(path.join(__dirname + "/pictures.html"));
});

app.get("/data", (req, res) => {
  res.json(pets);
});

app.listen(process.env.PORT || 8080);
