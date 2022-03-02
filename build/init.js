"use strict";

require("regenerator-runtime");

var db = require("./db");

var app = require("./app");

var PORT = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("App listening at http://localhost:".concat(PORT));
}); // heroku test