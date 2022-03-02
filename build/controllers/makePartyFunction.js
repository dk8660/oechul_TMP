"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupMaking = void 0;

var _party = _interopRequireDefault(require("../models/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var groupMaking = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
    var gender, field, oneManParty, twoManParty, i, j, _i;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            gender = 0;

          case 2:
            if (!(gender < 2)) {
              _context.next = 37;
              break;
            }

            field = 0;

          case 4:
            if (!(field < 15)) {
              _context.next = 34;
              break;
            }

            _context.next = 7;
            return _party["default"].find({
              Gender: gender,
              currentMember: 1,
              Field: field
            });

          case 7:
            oneManParty = _context.sent;
            _context.next = 10;
            return _party["default"].find({
              Gender: gender,
              currentMember: 2,
              Field: field
            });

          case 10:
            twoManParty = _context.sent;
            i = 0;

          case 12:
            if (!(i < oneManParty.length)) {
              _context.next = 30;
              break;
            }

            j = 0;

          case 14:
            if (!(j < twoManParty.length)) {
              _context.next = 27;
              break;
            }

            if (!(oneManParty[i].Field == twoManParty[j].Field)) {
              _context.next = 24;
              break;
            }

            _context.next = 18;
            return _party["default"].updateOne({
              code: twoManParty[j].code
            }, {
              thirdStudent_Name: oneManParty[i].Name,
              thirdStudent_STnumber: oneManParty[i].STnumber,
              thirdStudent_Major: oneManParty[i].Major,
              thirdStudent_instagramID: oneManParty[i].instagramID,
              thirdStudent_kakaoID: oneManParty[i].kakaoID,
              currentMember: 3
            });

          case 18:
            _context.next = 20;
            return _party["default"].deleteOne({
              STnumber: oneManParty[i].STnumber
            });

          case 20:
            twoManParty.splice(j, 1);
            oneManParty.splice(i, 1);
            i--;
            return _context.abrupt("continue", 24);

          case 24:
            j++;
            _context.next = 14;
            break;

          case 27:
            i++;
            _context.next = 12;
            break;

          case 30:
            // 1인 파티끼리 병합
            for (_i = 0; _i < oneManParty.length; _i++) {}

          case 31:
            field++;
            _context.next = 4;
            break;

          case 34:
            gender++;
            _context.next = 2;
            break;

          case 37:
            _context.next = 42;
            break;

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

  return function groupMaking(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.groupMaking = groupMaking;