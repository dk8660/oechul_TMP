"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var regionSchema = new _mongoose["default"].Schema({
  region: String,
  regionNumber: Number
});

var region = _mongoose["default"].model("test", regionSchema);

var _default = region;
exports["default"] = _default;