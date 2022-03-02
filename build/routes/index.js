"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _traversing = require("cheerio/lib/api/traversing");

var _express = _interopRequireWildcard(require("express"));

var _httpErrors = require("http-errors");

var _infoController = require("../controllers/infoController");

var _groupController = require("../controllers/groupController");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var indexRouter = _express["default"].Router();

indexRouter.get("/", _infoController.main);
indexRouter.get("/getinfo", _infoController.getinfo);
indexRouter.post("/getinfo_process", _infoController.getinfo_process);
indexRouter.get("/delete", _infoController.Delete);
indexRouter.post("/delete_process", _infoController.delete_process);
indexRouter.get("/update", _infoController.update);
indexRouter.post("/update_process", _infoController.update_process);
indexRouter.post("/edit_process", _infoController.edit_process);
indexRouter.get("/reference", _infoController.reference);
indexRouter.post("/result", _infoController.result);
indexRouter.get("/groupInfos", _groupController.groupInfos);
indexRouter.get("/groupGetinfo", _groupController.groupGetinfo);
indexRouter.post("/groupGetinfo_process", _groupController.groupGetinfo_process);
indexRouter.get("/groupMatch", _groupController.groupMatching);
indexRouter.get("/group", _groupController.groupMain);
indexRouter.get("/groupDelete", _groupController.groupDelete);
indexRouter.post("/groupDelete_process", _groupController.groupDelete_process);
var _default = indexRouter;
exports["default"] = _default;