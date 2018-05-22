"user strict";

var express = require("express");
var app = express();
var path = require("path");

// define the public folder to use
app.use(express.static("public"));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(3000, function () {
  console.log("listhenin");
})