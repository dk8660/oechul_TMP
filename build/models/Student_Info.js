"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Student_InfoSchema = new _mongoose["default"].Schema({
  _id: {
    type: Number,
    required: true
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
  Field: [{
    type: Number,
    required: true
  }],
  instagramID: String,
  kakaoID: {
    type: String,
    required: true
  },
  KoM: {
    type: String,
    required: true
  },
  OwnMBTI: {
    type: Number,
    required: true
  },
  WantedMBTI: [{
    type: Number
  }],
  Major: {
    type: String,
    required: true
  },
  MilitaryService: {
    type: Boolean,
    required: true
  },
  Smoker: {
    type: Boolean,
    required: true
  },
  Fre_Drinking: {
    type: String,
    required: true
  },
  SameGender: {
    type: Boolean,
    required: true
  },
  SameMajor: {
    type: Boolean,
    required: true
  },
  O_MilitaryService: {
    type: Boolean,
    required: true
  },
  O_Smoker: {
    type: Boolean,
    required: true
  },
  O_Fre_Drinking: {
    type: String
  },
  MatchedPeople: [{
    type: Number
  }],
  MatchedScore: [{
    type: Number
  }],
  isMatched: {
    type: Boolean,
    "default": false
  },
  selectedPerson: {
    type: String
  }
});

var StInfo_Model = _mongoose["default"].model("StudentInfo", Student_InfoSchema);

var _default = StInfo_Model;
exports["default"] = _default;