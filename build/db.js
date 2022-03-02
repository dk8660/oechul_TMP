"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb+srv://dk8660:sajo77@cluster0.7yxje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;

var handleOpen = function handleOpen() {
  return console.log("Connected to DB");
};

var handleError = function handleError(error) {
  return console.log("DB Error", error);
};

db.on("error", handleError);
db.once("open", handleOpen);