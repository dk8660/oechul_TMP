"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupMatching = exports.groupMain = exports.groupInfos = exports.groupGetinfo_process = exports.groupGetinfo = exports.groupDelete_process = exports.groupDelete = void 0;

var _express = require("express");

var _party = _interopRequireDefault(require("../models/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var groupMatching = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
    var member, field, Men, Women, i, j;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            member = 2;

          case 2:
            if (!(member < 5)) {
              _context.next = 36;
              break;
            }

            field = 0;

          case 4:
            if (!(field < 15)) {
              _context.next = 33;
              break;
            }

            _context.next = 7;
            return _party["default"].find({
              Gender: 0,
              currentMember: member,
              Field: field
            });

          case 7:
            Men = _context.sent;
            _context.next = 10;
            return _party["default"].find({
              Gender: 1,
              currentMember: member,
              Field: field
            });

          case 10:
            Women = _context.sent;
            i = 0;

          case 12:
            if (!(i < Men.length)) {
              _context.next = 30;
              break;
            }

            j = 0;

          case 14:
            if (!(j < Women.length)) {
              _context.next = 27;
              break;
            }

            if (!(Men[i].Major !== Women[j].Major)) {
              _context.next = 24;
              break;
            }

            _context.next = 18;
            return _party["default"].updateOne({
              code: Men[i].code
            }, {
              isMatched: true,
              matchedPartyCode: Women[j].code
            });

          case 18:
            _context.next = 20;
            return _party["default"].updateOne({
              code: Women[j].code
            }, {
              isMatched: true,
              matchedPartyCode: Men[i].code
            });

          case 20:
            Men.splice(i, 1);
            Women.splice(j, 1);
            i--;
            j--;

          case 24:
            j++;
            _context.next = 14;
            break;

          case 27:
            i++;
            _context.next = 12;
            break;

          case 30:
            field++;
            _context.next = 4;
            break;

          case 33:
            member++;
            _context.next = 2;
            break;

          case 36:
            return _context.abrupt("return", response.render("groupMain"));

          case 39:
            _context.prev = 39;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 39]]);
  }));

  return function groupMatching(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.groupMatching = groupMatching;

var groupGetinfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", response.render("groupGetinfo"));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function groupGetinfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.groupGetinfo = groupGetinfo;

var groupGetinfo_process = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response) {
    var _request$body, STnumber, Name, Gender, Major, Field, instagramID, kakaoID, secondStudent_STnumber, secondStudent_Name, secondStudent_instagramID, secondStudent_kakaoID, thirdStudent_STnumber, thirdStudent_Name, thirdStudent_instagramID, thirdStudent_kakaoID, forthStudent_STnumber, forthStudent_Name, forthStudent_instagramID, forthStudent_kakaoID, currentMember, info;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _request$body = request.body, STnumber = _request$body.STnumber, Name = _request$body.Name, Gender = _request$body.Gender, Major = _request$body.Major, Field = _request$body.Field, instagramID = _request$body.instagramID, kakaoID = _request$body.kakaoID, secondStudent_STnumber = _request$body.secondStudent_STnumber, secondStudent_Name = _request$body.secondStudent_Name, secondStudent_instagramID = _request$body.secondStudent_instagramID, secondStudent_kakaoID = _request$body.secondStudent_kakaoID, thirdStudent_STnumber = _request$body.thirdStudent_STnumber, thirdStudent_Name = _request$body.thirdStudent_Name, thirdStudent_instagramID = _request$body.thirdStudent_instagramID, thirdStudent_kakaoID = _request$body.thirdStudent_kakaoID, forthStudent_STnumber = _request$body.forthStudent_STnumber, forthStudent_Name = _request$body.forthStudent_Name, forthStudent_instagramID = _request$body.forthStudent_instagramID, forthStudent_kakaoID = _request$body.forthStudent_kakaoID, currentMember = _request$body.currentMember;
            info = new _party["default"]({
              code: STnumber,
              STnumber: STnumber,
              Name: Name,
              Gender: Gender,
              Major: Major,
              Field: Field,
              instagramID: instagramID,
              kakaoID: kakaoID,
              secondStudent_STnumber: secondStudent_STnumber,
              secondStudent_Name: secondStudent_Name,
              secondStudent_instagramID: secondStudent_instagramID,
              secondStudent_kakaoID: secondStudent_kakaoID,
              thirdStudent_STnumber: thirdStudent_STnumber,
              thirdStudent_Name: thirdStudent_Name,
              thirdStudent_instagramID: thirdStudent_instagramID,
              thirdStudent_kakaoID: thirdStudent_kakaoID,
              forthStudent_STnumber: forthStudent_STnumber,
              forthStudent_Name: forthStudent_Name,
              forthStudent_instagramID: forthStudent_instagramID,
              forthStudent_kakaoID: forthStudent_kakaoID,
              currentMember: currentMember
            });
            _context3.next = 5;
            return info.save();

          case 5:
            return _context3.abrupt("return", response.render("groupMain"));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function groupGetinfo_process(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.groupGetinfo_process = groupGetinfo_process;

var groupInfos = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, response) {
    var infos;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _party["default"].find({});

          case 2:
            infos = _context4.sent;
            return _context4.abrupt("return", response.render("groupInfos", {
              infos: infos
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function groupInfos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.groupInfos = groupInfos;

var groupMain = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, response) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", response.render("groupMain"));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function groupMain(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.groupMain = groupMain;

var groupDelete = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(request, response) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", response.render("groupDelete"));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function groupDelete(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.groupDelete = groupDelete;

var groupDelete_process = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(request, response) {
    var code;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            code = request.body.code;
            _context7.t0 = console;
            _context7.next = 4;
            return _party["default"].find({
              code: code
            });

          case 4:
            _context7.t1 = _context7.sent;

            _context7.t0.log.call(_context7.t0, _context7.t1);

            _context7.next = 8;
            return _party["default"].deleteOne({
              code: code
            }, function (error) {
              if (error) console.log(error);
            });

          case 8:
            return _context7.abrupt("return", response.render("groupMain"));

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function groupDelete_process(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.groupDelete_process = groupDelete_process;