"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regionHome = exports.delete_process = exports.add_process = exports.add = exports.Delete = void 0;

var _region = _interopRequireDefault(require("../models/region"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var regionHome = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _region["default"].find({}, function (error, regions) {
              return res.render('regionList', {
                regions: regions
              });
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function regionHome(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.regionHome = regionHome;

var add = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", res.render("addRegion"));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function add(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.add = add;

var add_process = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, region, regionNumber, newRegion;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, region = _req$body.region, regionNumber = _req$body.regionNumber;
            newRegion = new _region["default"]({
              region: region,
              regionNumber: regionNumber
            });
            _context3.next = 4;
            return newRegion.save();

          case 4:
            return _context3.abrupt("return", res.redirect('/regions'));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function add_process(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.add_process = add_process;

var Delete = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, response) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", response.render("deleteRegion"));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function Delete(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.Delete = Delete;

var delete_process = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, response) {
    var region;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            region = request.body.region;
            _context5.next = 3;
            return _region["default"].deleteOne({
              region: region
            }, function (err) {
              if (err) console.log(err);
            });

          case 3:
            return _context5.abrupt("return", response.redirect("/regions"));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function delete_process(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.delete_process = delete_process;