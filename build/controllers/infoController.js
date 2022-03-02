"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watch = exports.update_process = exports.update = exports.result = exports.reference = exports.main = exports.home = exports.getinfo_process = exports.getinfo = exports.edit_process = exports.delete_process = exports.Delete = void 0;

var _Student_Info = _interopRequireDefault(require("../models/Student_Info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var main = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", response.render("main"));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.main = main;

var home = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
    var infos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Student_Info["default"].find({});

          case 2:
            infos = _context2.sent;
            return _context2.abrupt("return", response.render("home", {
              infos: infos
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function home(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.home = home;

var getinfo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", response.render("getinfo"));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getinfo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getinfo = getinfo;

var getinfo_process = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, response) {
    var _request$body, STnumber, Name, Gender, Field, instagramID, kakaoID, KoM, OwnMBTI, WantedMBTI, Major, MilitaryService, Smoker, Fre_Drinking, SameGender, SameMajor, O_MilitaryService, O_Smoker, info;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _request$body = request.body, STnumber = _request$body.STnumber, Name = _request$body.Name, Gender = _request$body.Gender, Field = _request$body.Field, instagramID = _request$body.instagramID, kakaoID = _request$body.kakaoID, KoM = _request$body.KoM, OwnMBTI = _request$body.OwnMBTI, WantedMBTI = _request$body.WantedMBTI, Major = _request$body.Major, MilitaryService = _request$body.MilitaryService, Smoker = _request$body.Smoker, Fre_Drinking = _request$body.Fre_Drinking, SameGender = _request$body.SameGender, SameMajor = _request$body.SameMajor, O_MilitaryService = _request$body.O_MilitaryService, O_Smoker = _request$body.O_Smoker;
            info = new _Student_Info["default"]({
              _id: Number(STnumber),
              STnumber: STnumber,
              Name: Name,
              Gender: Gender,
              Field: Field.split(",").map(function (word) {
                return "".concat(word);
              }),
              instagramID: instagramID,
              kakaoID: kakaoID,
              KoM: KoM,
              OwnMBTI: OwnMBTI,
              WantedMBTI: WantedMBTI.split(",").map(function (word) {
                return "".concat(word);
              }),
              Major: Major,
              MilitaryService: MilitaryService,
              Smoker: Smoker,
              Fre_Drinking: Fre_Drinking,
              SameGender: SameGender,
              SameMajor: SameMajor,
              O_MilitaryService: O_MilitaryService,
              O_Smoker: O_Smoker
            });
            _context4.next = 4;
            return info.save();

          case 4:
            return _context4.abrupt("return", response.redirect("/"));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getinfo_process(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getinfo_process = getinfo_process;

var Delete = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, response) {
    var msg;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            msg = "";
            return _context5.abrupt("return", response.render("delete", {
              msg: msg
            }));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function Delete(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.Delete = Delete;

var delete_process = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(request, response) {
    var _request$body2, STnumber, kakaoID, process;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _request$body2 = request.body, STnumber = _request$body2.STnumber, kakaoID = _request$body2.kakaoID;
            process = true;
            _context6.next = 4;
            return _Student_Info["default"].findById(Number(STnumber), function (error, info) {
              if (!info) {
                var msg = "존재하지 않는 학번입니다.";
                process = false;
                return response.render("delete", {
                  msg: msg
                });
              }

              if (info.kakaoID !== kakaoID) {
                var _msg = "일치하지 않는 카카오 ID 입니다.";
                process = false;
                return response.render("delete", {
                  msg: _msg
                });
              }
            });

          case 4:
            if (!process) {
              _context6.next = 8;
              break;
            }

            _context6.next = 7;
            return _Student_Info["default"].deleteOne({
              STnumber: STnumber
            }, function (err) {
              if (err) console.log(err);
            });

          case 7:
            return _context6.abrupt("return", response.redirect("/"));

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function delete_process(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.delete_process = delete_process;

var update = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(request, response) {
    var msg;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            msg = "";
            return _context7.abrupt("return", response.render("update", {
              msg: msg
            }));

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function update(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.update = update;

var update_process = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(request, response) {
    var _request$body3, STnumber, kakaoID;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _request$body3 = request.body, STnumber = _request$body3.STnumber, kakaoID = _request$body3.kakaoID;
            _context8.next = 3;
            return _Student_Info["default"].findById(Number(STnumber), function (error, info) {
              if (!info) {
                var msg = "존재하지 않는 학번입니다.";
                return response.render("update", {
                  msg: msg
                });
              }

              if (info.kakaoID !== kakaoID) {
                var _msg2 = "일치하지 않는 카카오 ID 입니다.";
                return response.render("update", {
                  msg: _msg2
                });
              }

              return response.render("edit", {
                info: info
              });
            });

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function update_process(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.update_process = update_process;

var edit_process = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(request, response) {
    var _request$body4, STnumber, Name, Gender, Field, instagramID, kakaoID, KoM, OwnMBTI, WantedMBTI, Major, MilitaryService, Smoker, Fre_Drinking, SameGender, SameMajor, O_MilitaryService, O_Smoker, MatchedPeople, MatchedScore, isMatched, selectedPerson;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _request$body4 = request.body, STnumber = _request$body4.STnumber, Name = _request$body4.Name, Gender = _request$body4.Gender, Field = _request$body4.Field, instagramID = _request$body4.instagramID, kakaoID = _request$body4.kakaoID, KoM = _request$body4.KoM, OwnMBTI = _request$body4.OwnMBTI, WantedMBTI = _request$body4.WantedMBTI, Major = _request$body4.Major, MilitaryService = _request$body4.MilitaryService, Smoker = _request$body4.Smoker, Fre_Drinking = _request$body4.Fre_Drinking, SameGender = _request$body4.SameGender, SameMajor = _request$body4.SameMajor, O_MilitaryService = _request$body4.O_MilitaryService, O_Smoker = _request$body4.O_Smoker, MatchedPeople = _request$body4.MatchedPeople, MatchedScore = _request$body4.MatchedScore, isMatched = _request$body4.isMatched, selectedPerson = _request$body4.selectedPerson;
            _context9.next = 3;
            return _Student_Info["default"].findById(Number(STnumber), function (error, info) {
              info._id = Number(STnumber), info.STnumber = STnumber, info.Name = Name, info.Gender = Gender, info.Field = Field.split(",").map(function (word) {
                return "".concat(word);
              }), info.instagramID = instagramID, info.kakaoID = kakaoID, info.KoM = KoM, info.OwnMBTI = OwnMBTI, info.WantedMBTI = WantedMBTI.split(",").map(function (word) {
                return "".concat(word);
              }), info.Major = Major, info.MilitaryService = MilitaryService, info.Smoker = Smoker, info.Fre_Drinking = Fre_Drinking, info.SameGender = SameGender, info.SameMajor = SameMajor, info.O_MilitaryService = O_MilitaryService, info.O_Smoker = O_Smoker, info.MatchedPeople = MatchedPeople, info.MatchedScore = MatchedScore, info.isMatched = isMatched, info.selectedPerson = selectedPerson;
              info.save();
            });

          case 3:
            return _context9.abrupt("return", response.redirect("/"));

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function edit_process(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.edit_process = edit_process;

var reference = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(request, response) {
    var msg;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            msg = "";
            return _context10.abrupt("return", response.render("reference", {
              msg: msg
            }));

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function reference(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.reference = reference;

var result = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(request, response) {
    var _request$body5, STnumber, kakaoID, SP;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _request$body5 = request.body, STnumber = _request$body5.STnumber, kakaoID = _request$body5.kakaoID;
            SP = null;
            _context11.next = 4;
            return _Student_Info["default"].findOne({
              STnumber: STnumber
            }, function (err, person) {
              if (err) console.log(err);

              if (!person) {
                var msg = "존재하지 않는 학번입니다.";
                return response.render("reference", {
                  msg: msg
                });
              }

              if (person.kakaoID != kakaoID) {
                var _msg3 = "일치하지 않는 카카오 ID 입니다.";
                return response.render("reference", {
                  msg: _msg3
                });
              }

              if (person.isMatched === true) {
                SP = person.selectedPerson;
              }
            });

          case 4:
            if (!(SP !== null)) {
              _context11.next = 9;
              break;
            }

            _context11.next = 7;
            return _Student_Info["default"].findOne({
              STnumber: SP
            }, function (error, info) {
              if (!info) {
                return response.render("sorry");
              }

              var result = {
                OwnMBTI: convertMBTIIDtoString(info.OwnMBTI),
                kakaoID: info.kakaoID,
                Gender: convertGenderIDtoString(info.Gender),
                Field: convertFieldIDtoString(info.Field),
                instagramID: info.instagramID,
                Major: info.Major
              };
              return response.render("result", {
                result: result
              });
            });

          case 7:
            _context11.next = 10;
            break;

          case 9:
            return _context11.abrupt("return", response.render("sorry"));

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function result(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.result = result;

var watch = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(request, response) {
    var STnumber;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            STnumber = request.url.slice(6);
            _context12.next = 3;
            return _Student_Info["default"].findById(Number(STnumber), function (error, info) {
              return response.render("detail", {
                info: info
              });
            });

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function watch(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

exports.watch = watch;
var FieldList = ["강남구", "서초구", "마포구", "동대문구", "성남시", "수원시", "용인시", "고양시", "인천", "대전", "강릉", "전주", "광주광역시", "대구", "부산"];

function convertFieldIDtoString(ID_List) {
  var str = "";

  for (var i = 0; i < ID_List.length; i++) {
    if (i === 0) {
      str = str + FieldList[ID_List[i]];
    } else {
      str = str + ", " + FieldList[ID_List[i]];
    }
  }

  return str;
}

function convertGenderIDtoString(GenderID) {
  if (GenderID == 0) {
    return "남성";
  } else {
    return "여성";
  }
}

var MBTI_List = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENJF", "ENTJ"];

function convertMBTIIDtoString(MBTI) {
  return MBTI_List[MBTI];
}