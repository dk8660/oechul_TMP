"use strict";

require("regenerator-runtime");

var db = require("./db");

var app = require("./app");

var port = 3000;
app.listen(port, function () {
  console.log("App listening at http://localhost:".concat(port));
});