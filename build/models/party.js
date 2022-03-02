"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var partySchema = new _mongoose["default"].Schema({
  code: {
    type: Number
  },
  STnumber: {
    type: Number,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Gender: {
    type: Number,
    required: true
  },
  Major: {
    type: String,
    required: true
  },
  Field: {
    type: Number,
    required: true
  },
  instagramID: String,
  kakaoID: {
    type: String,
    required: true
  },
  secondStudent_STnumber: {
    type: Number
  },
  secondStudent_Name: {
    type: String
  },
  secondStudent_instagramID: String,
  secondStudent_kakaoID: {
    type: String
  },
  thirdStudent_STnumber: {
    type: Number
  },
  thirdStudent_Name: {
    type: String
  },
  thirdStudent_instagramID: String,
  thirdStudent_kakaoID: {
    type: String
  },
  forthStudent_STnumber: {
    type: Number
  },
  forthStudent_Name: {
    type: String
  },
  forthStudent_instagramID: String,
  forthStudent_kakaoID: {
    type: String
  },
  currentMember: {
    type: Number
  },
  isMatched: {
    type: Boolean,
    "default": false
  },
  matchedPartyCode: {
    type: Number
  }
});

var partyModel = _mongoose["default"].model("party", partySchema);

var _default = partyModel;
exports["default"] = _default;