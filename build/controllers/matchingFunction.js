"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.select = exports.matching = void 0;

var _Student_Info = _interopRequireDefault(require("../models/Student_Info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var matching = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
    var friend, couple, exercise, regions, fF, cF, eF, index, i, j, _index, _i, _j, _index2, _i2, _j2, ind, MBTI, inde, _i3, _inde, _index3, temp, ti, _i4, _ti, _ti2, _ti3, result, scoreList, _ti4, score, _i5, _ti5, _ti6, _ind, _MBTI, _inde2, _i6, _inde3, _index4, _temp, _ti7, _i7, _ti8, _ti9, _ti10, _result, _scoreList, _ti11, _score, _i8, _ti12, _ti13, _ind2, _MBTI2, _inde4, _i9, _inde5, _index5, _temp2, _ti14, _i10, _ti15, _ti16, _ti17, _result2, _scoreList2, _ti18, _score2, _i11, _ti19, _ti20;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Student_Info["default"].find({
              KoM: '친구'
            });

          case 3:
            friend = _context.sent;
            console.log('친구:', friend);
            _context.next = 7;
            return _Student_Info["default"].find({
              KoM: '연인'
            });

          case 7:
            couple = _context.sent;
            console.log('연인:', couple);
            _context.next = 11;
            return _Student_Info["default"].find({
              KoM: '운동'
            });

          case 11:
            exercise = _context.sent;
            console.log('운동:', exercise); // 지역

            regions = 15;
            fF = Array.from(Array(regions), function () {
              return new Array();
            }); // 친구 매칭 선택자들을 지역 별로 분류

            cF = Array.from(Array(regions), function () {
              return new Array();
            }); // 연인 매칭 선택자들을 지역 별로 분류

            eF = Array.from(Array(regions), function () {
              return new Array();
            }); // 운동 매칭 선택자들을 지역 별로 분류

            for (index = 0; index < friend.length; index++) {
              // ex) fF[0]은 지역 번호 0번인 강남구 지역 선택자 & 친구 매칭 선택자
              for (i = 0; i < friend[index].Field.length; i++) {
                for (j = 0; j < regions; j++) {
                  if (j == friend[index].Field[i]) fF[j].push(friend[index]);
                }
              }
            }

            console.log('fF:', fF);

            for (_index = 0; _index < couple.length; _index++) {
              for (_i = 0; _i < couple[_index].Field.length; _i++) {
                for (_j = 0; _j < regions; _j++) {
                  if (_j == couple[_index].Field[_i]) cF[_j].push(couple[_index]);
                }
              }
            }

            console.log('cF:', cF);

            for (_index2 = 0; _index2 < exercise.length; _index2++) {
              for (_i2 = 0; _i2 < exercise[_index2].Field.length; _i2++) {
                for (_j2 = 0; _j2 < regions; _j2++) {
                  if (_j2 == exercise[_index2].Field[_i2]) eF[_j2].push(exercise[_index2]);
                }
              }
            }

            console.log('eF:', eF); // 각자의 선택에 맞춘 후보들 정리
            //친구 매칭

            ind = 0;

          case 24:
            if (!(ind < fF.length)) {
              _context.next = 47;
              break;
            }

            // 지역별로 본인 MBTI 분류
            MBTI = Array.from(Array(16), function () {
              return new Array();
            });

            for (inde = 0; inde < fF[ind].length; inde++) {
              for (_i3 = 0; _i3 < 16; _i3++) {
                if (fF[ind][inde].OwnMBTI == _i3) MBTI[_i3].push(fF[ind][inde]);
              }
            }

            _inde = 0;

          case 28:
            if (!(_inde < fF[ind].length)) {
              _context.next = 44;
              break;
            }

            _index3 = 0;
            temp = new Array(); // 1. 원하는 MBTI를 가진 상대방을 매칭 대상에 추가

            for (ti = 0; ti < fF[ind][_inde].WantedMBTI.length; ti++) {
              for (_i4 = 0; _i4 < MBTI[fF[ind][_inde].WantedMBTI[ti]].length; _i4++) {
                if (fF[ind][_inde].STnumber != MBTI[fF[ind][_inde].WantedMBTI[ti]][_i4].STnumber) {
                  temp.push(MBTI[fF[ind][_inde].WantedMBTI[ti]][_i4]);
                }
              }
            } // 2. 같은 학과 매칭 가능 여부 판단


            if (!fF[ind][_inde].SameMajor) {
              _index3 = 0;

              for (_ti = 0; _ti < temp.length; _ti++) {
                if (fF[ind][_inde].Major === temp[_ti].Major) {
                  temp.splice(_index3, 1);
                  _index3--;
                }

                _index3++;
              }
            } // 3. 동성 매칭 가능 여부 판단


            if (!fF[ind][_inde].SameGender) {
              // 이성
              _index3 = 0;

              for (_ti2 = 0; _ti2 < temp.length; _ti2++) {
                if (fF[ind][_inde].Gender == temp[_ti2].Gender) {
                  // 동성인 경우
                  temp.splice(_index3, 1);
                  _index3--;
                } else if (temp[_ti2].SameGender) {
                  // 이성이지만 상대방이 동성을 원하는 경우
                  temp.splice(_index3, 1);
                  _index3--;
                }

                _index3++;
              }
            } else {
              // 동성
              _index3 = 0;

              for (_ti3 = 0; _ti3 < temp.length; _ti3++) {
                if (fF[ind][_inde].Gender != temp[_ti3].Gender) {
                  // 이성인 경우
                  temp.splice(_index3, 1);
                  _index3--;
                } else if (!temp[_ti3].SameGender) {
                  // 동성이지만 상대방이 이성을 원하는 경우
                  temp.splice(_index3, 1);
                  _index3--;
                }

                _index3++;
              }
            } //점수가 반영되는 부분들


            result = [];
            scoreList = [];

            for (_ti4 = 0; _ti4 < temp.length; _ti4++) {
              score = 0; // 4. 쌍방 선호 MBTI

              for (_i5 = 0; _i5 < temp[_ti4].WantedMBTI.length; _i5++) {
                if (fF[ind][_inde].OwnMBTI == temp[_ti4].WantedMBTI[_i5]) {
                  score++;
                }
              } // 5. 군필자만 매칭 가능 여부 판단


              if (fF[ind][_inde].O_MilitaryService) {
                for (_ti5 = 0; _ti5 < temp.length; _ti5++) {
                  if (temp[_ti5].MilitaryService) {
                    score++;
                  }
                }
              } else {
                score++;
              } // 6. 흡연자 매칭 가능 여부 판단


              if (!fF[ind][_inde].O_Smoker) {
                for (_ti6 = 0; _ti6 < temp.length; _ti6++) {
                  if (!temp[_ti6].Smoker) {
                    score++;
                  }
                }
              } else {
                score++;
              } // 결과 등록


              if (score >= 2) {
                result.push(Number(temp[_ti4].STnumber));
                scoreList.push(Number(score));
              }
            }

            _context.next = 39;
            return _Student_Info["default"].updateOne({
              STnumber: fF[ind][_inde].STnumber
            }, {
              MatchedPeople: result
            });

          case 39:
            _context.next = 41;
            return _Student_Info["default"].updateOne({
              STnumber: fF[ind][_inde].STnumber
            }, {
              MatchedScore: scoreList
            });

          case 41:
            _inde++;
            _context.next = 28;
            break;

          case 44:
            ind++;
            _context.next = 24;
            break;

          case 47:
            _ind = 0;

          case 48:
            if (!(_ind < cF.length)) {
              _context.next = 71;
              break;
            }

            // 지역별로 본인 MBTI 분류
            _MBTI = Array.from(Array(16), function () {
              return new Array();
            });

            for (_inde2 = 0; _inde2 < cF[_ind].length; _inde2++) {
              for (_i6 = 0; _i6 < 16; _i6++) {
                if (cF[_ind][_inde2].OwnMBTI == _i6) _MBTI[_i6].push(cF[_ind][_inde2]);
              }
            }

            _inde3 = 0;

          case 52:
            if (!(_inde3 < cF[_ind].length)) {
              _context.next = 68;
              break;
            }

            _index4 = 0;
            _temp = new Array(); // 1. 원하는 MBTI를 가진 상대방을 매칭 대상에 추가

            for (_ti7 = 0; _ti7 < cF[_ind][_inde3].WantedMBTI.length; _ti7++) {
              for (_i7 = 0; _i7 < _MBTI[cF[_ind][_inde3].WantedMBTI[_ti7]].length; _i7++) {
                if (cF[_ind][_inde3].STnumber != _MBTI[cF[_ind][_inde3].WantedMBTI[_ti7]][_i7].STnumber) {
                  _temp.push(_MBTI[cF[_ind][_inde3].WantedMBTI[_ti7]][_i7]);
                }
              }
            } // 2. 같은 학과 매칭 가능 여부 판단


            if (!cF[_ind][_inde3].SameMajor) {
              _index4 = 0;

              for (_ti8 = 0; _ti8 < _temp.length; _ti8++) {
                if (cF[_ind][_inde3].Major === _temp[_ti8].Major) {
                  _temp.splice(_index4, 1);

                  _index4--;
                }

                _index4++;
              }
            } // 3. 동성 매칭 가능 여부 판단


            if (!cF[_ind][_inde3].SameGender) {
              // 이성
              _index4 = 0;

              for (_ti9 = 0; _ti9 < _temp.length; _ti9++) {
                if (cF[_ind][_inde3].Gender == _temp[_ti9].Gender) {
                  // 동성인 경우
                  _temp.splice(_index4, 1);

                  _index4--;
                } else if (_temp[_ti9].SameGender) {
                  // 이성이지만 상대방이 동성을 원하는 경우
                  _temp.splice(_index4, 1);

                  _index4--;
                }

                _index4++;
              }
            } else {
              // 동성
              _index4 = 0;

              for (_ti10 = 0; _ti10 < _temp.length; _ti10++) {
                if (cF[_ind][_inde3].Gender != _temp[_ti10].Gender) {
                  // 이성인 경우
                  _temp.splice(_index4, 1);

                  _index4--;
                } else if (!_temp[_ti10].SameGender) {
                  // 동성이지만 상대방이 이성을 원하는 경우
                  _temp.splice(_index4, 1);

                  _index4--;
                }

                _index4++;
              }
            } //점수가 반영되는 부분들


            _result = [];
            _scoreList = [];

            for (_ti11 = 0; _ti11 < _temp.length; _ti11++) {
              _score = 0; // 4. 쌍방 선호 MBTI

              for (_i8 = 0; _i8 < _temp[_ti11].WantedMBTI.length; _i8++) {
                if (cF[_ind][_inde3].OwnMBTI == _temp[_ti11].WantedMBTI[_i8]) {
                  _score++;
                }
              } // 5. 군필자만 매칭 가능 여부 판단


              if (cF[_ind][_inde3].O_MilitaryService) {
                for (_ti12 = 0; _ti12 < _temp.length; _ti12++) {
                  if (_temp[_ti12].MilitaryService) {
                    _score++;
                  }
                }
              } else {
                _score++;
              } // 6. 흡연자 매칭 가능 여부 판단


              if (!cF[_ind][_inde3].O_Smoker) {
                for (_ti13 = 0; _ti13 < _temp.length; _ti13++) {
                  if (!_temp[_ti13].Smoker) {
                    _score++;
                  }
                }
              } else {
                _score++;
              } // 결과 등록


              if (_score >= 2) {
                _result.push(Number(_temp[_ti11].STnumber));

                _scoreList.push(Number(_score));
              }
            }

            _context.next = 63;
            return _Student_Info["default"].updateOne({
              STnumber: cF[_ind][_inde3].STnumber
            }, {
              MatchedPeople: _result
            });

          case 63:
            _context.next = 65;
            return _Student_Info["default"].updateOne({
              STnumber: cF[_ind][_inde3].STnumber
            }, {
              MatchedScore: _scoreList
            });

          case 65:
            _inde3++;
            _context.next = 52;
            break;

          case 68:
            _ind++;
            _context.next = 48;
            break;

          case 71:
            _ind2 = 0;

          case 72:
            if (!(_ind2 < eF.length)) {
              _context.next = 95;
              break;
            }

            // 지역별로 본인 MBTI 분류
            _MBTI2 = Array.from(Array(16), function () {
              return new Array();
            });

            for (_inde4 = 0; _inde4 < eF[_ind2].length; _inde4++) {
              for (_i9 = 0; _i9 < 16; _i9++) {
                if (eF[_ind2][_inde4].OwnMBTI == _i9) _MBTI2[_i9].push(eF[_ind2][_inde4]);
              }
            }

            _inde5 = 0;

          case 76:
            if (!(_inde5 < eF[_ind2].length)) {
              _context.next = 92;
              break;
            }

            _index5 = 0;
            _temp2 = new Array(); // 1. 원하는 MBTI를 가진 상대방을 매칭 대상에 추가

            for (_ti14 = 0; _ti14 < eF[_ind2][_inde5].WantedMBTI.length; _ti14++) {
              for (_i10 = 0; _i10 < _MBTI2[eF[_ind2][_inde5].WantedMBTI[_ti14]].length; _i10++) {
                if (eF[_ind2][_inde5].STnumber != _MBTI2[eF[_ind2][_inde5].WantedMBTI[_ti14]][_i10].STnumber) {
                  _temp2.push(_MBTI2[eF[_ind2][_inde5].WantedMBTI[_ti14]][_i10]);
                }
              }
            } // 2. 같은 학과 매칭 가능 여부 판단


            if (!eF[_ind2][_inde5].SameMajor) {
              _index5 = 0;

              for (_ti15 = 0; _ti15 < _temp2.length; _ti15++) {
                if (eF[_ind2][_inde5].Major === _temp2[_ti15].Major) {
                  _temp2.splice(_index5, 1);

                  _index5--;
                }

                _index5++;
              }
            } // 3. 동성 매칭 가능 여부 판단


            if (!eF[_ind2][_inde5].SameGender) {
              // 이성
              _index5 = 0;

              for (_ti16 = 0; _ti16 < _temp2.length; _ti16++) {
                if (eF[_ind2][_inde5].Gender == _temp2[_ti16].Gender) {
                  // 동성인 경우
                  _temp2.splice(_index5, 1);

                  _index5--;
                } else if (_temp2[_ti16].SameGender) {
                  // 이성이지만 상대방이 동성을 원하는 경우
                  _temp2.splice(_index5, 1);

                  _index5--;
                }

                _index5++;
              }
            } else {
              // 동성
              _index5 = 0;

              for (_ti17 = 0; _ti17 < _temp2.length; _ti17++) {
                if (eF[_ind2][_inde5].Gender != _temp2[_ti17].Gender) {
                  // 이성인 경우
                  _temp2.splice(_index5, 1);

                  _index5--;
                } else if (!_temp2[_ti17].SameGender) {
                  // 동성이지만 상대방이 이성을 원하는 경우
                  _temp2.splice(_index5, 1);

                  _index5--;
                }

                _index5++;
              }
            } //점수가 반영되는 부분들


            _result2 = [];
            _scoreList2 = [];

            for (_ti18 = 0; _ti18 < _temp2.length; _ti18++) {
              _score2 = 0; // 4. 쌍방 선호 MBTI

              for (_i11 = 0; _i11 < _temp2[_ti18].WantedMBTI.length; _i11++) {
                if (eF[_ind2][_inde5].OwnMBTI == _temp2[_ti18].WantedMBTI[_i11]) {
                  _score2++;
                }
              } // 5. 군필자만 매칭 가능 여부 판단


              if (eF[_ind2][_inde5].O_MilitaryService) {
                for (_ti19 = 0; _ti19 < _temp2.length; _ti19++) {
                  if (_temp2[_ti19].MilitaryService) {
                    _score2++;
                  }
                }
              } else {
                _score2++;
              } // 6. 흡연자 매칭 가능 여부 판단


              if (!eF[_ind2][_inde5].O_Smoker) {
                for (_ti20 = 0; _ti20 < _temp2.length; _ti20++) {
                  if (!_temp2[_ti20].Smoker) {
                    _score2++;
                  }
                }
              } else {
                _score2++;
              } // 결과 등록


              if (_score2 >= 2) {
                _result2.push(Number(_temp2[_ti18].STnumber));

                _scoreList2.push(Number(_score2));
              }
            }

            _context.next = 87;
            return _Student_Info["default"].updateOne({
              STnumber: eF[_ind2][_inde5].STnumber
            }, {
              MatchedPeople: _result2
            });

          case 87:
            _context.next = 89;
            return _Student_Info["default"].updateOne({
              STnumber: eF[_ind2][_inde5].STnumber
            }, {
              MatchedScore: _scoreList2
            });

          case 89:
            _inde5++;
            _context.next = 76;
            break;

          case 92:
            _ind2++;
            _context.next = 72;
            break;

          case 95:
            return _context.abrupt("return", response.render('matching'));

          case 98:
            _context.prev = 98;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 101:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 98]]);
  }));

  return function matching(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.matching = matching;

var select = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
    var infos, index, i, max, j, a, b, updateInfos, _i12, _j3;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

          case 1:
            if (!1) {
              _context2.next = 39;
              break;
            }

            _context2.next = 4;
            return _Student_Info["default"].find({
              isMatched: false
            });

          case 4:
            infos = _context2.sent;
            // 매칭이 되지 않은 모든 사람들 불러오기
            infos.sort(function (a, b) {
              // 매칭 후보의 수를 비교하여 오름차순으로 정렬
              return a.MatchedPeople.length - b.MatchedPeople.length;
            });
            index = 0;
            i = 0;

          case 8:
            if (!(i < infos.length)) {
              _context2.next = 17;
              break;
            }

            if (!(infos[i].MatchedPeople.length > 0)) {
              _context2.next = 12;
              break;
            }

            // 매칭 가능한 후보가 있으면 매칭 시작
            index = i;
            return _context2.abrupt("break", 17);

          case 12:
            if (!(i == infos.length - 1)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", response.render('select'));

          case 14:
            i++;
            _context2.next = 8;
            break;

          case 17:
            max = 0;

            for (j = 1; j < infos[index].MatchedPeople.length; j++) {
              // 점수가 가장 높은 후보를 선택
              if (infos[index].MatchedScore[max] < infos[index].MatchedScore[j]) max = j;
            }

            a = infos[index].STnumber;
            b = infos[index].MatchedPeople[max];
            _context2.next = 23;
            return _Student_Info["default"].updateOne({
              STnumber: a
            }, {
              MatchedPeople: [null],
              MatchedScore: [null],
              isMatched: true,
              selectedPerson: b
            });

          case 23:
            _context2.next = 25;
            return _Student_Info["default"].updateOne({
              STnumber: b
            }, {
              MatchedPeople: [null],
              MatchedScore: [null],
              isMatched: true,
              selectedPerson: a
            });

          case 25:
            _context2.next = 27;
            return _Student_Info["default"].find({
              isMatched: false
            });

          case 27:
            updateInfos = _context2.sent;
            _i12 = 1;

          case 29:
            if (!(_i12 < updateInfos.length)) {
              _context2.next = 37;
              break;
            }

            // 매칭이 완료된 사람들은 다른 사람들의 후보 리스트에서 제외
            index = 0;

            for (_j3 = 0; _j3 < updateInfos[_i12].MatchedPeople.length; _j3++) {
              if (updateInfos[_i12].MatchedPeople[index] == a || infos[_i12].MatchedPeople[index] == b) {
                updateInfos[_i12].MatchedPeople.splice(index, 1);

                updateInfos[_i12].MatchedScore.splice(index, 1);

                index--;
              }

              index++;
            }

            _context2.next = 34;
            return _Student_Info["default"].updateOne({
              STnumber: updateInfos[_i12].STnumber
            }, {
              MatchedPeople: updateInfos[_i12].MatchedPeople,
              MatchedScore: updateInfos[_i12].MatchedScore
            });

          case 34:
            _i12++;
            _context2.next = 29;
            break;

          case 37:
            _context2.next = 1;
            break;

          case 39:
            return _context2.abrupt("return", response.render('select'));

          case 42:
            _context2.prev = 42;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 45:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 42]]);
  }));

  return function select(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.select = select;