"use strict";

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _fs = _interopRequireDefault(require("fs"));

var _helmet = _interopRequireDefault(require("helmet"));

var _index = _interopRequireDefault(require("./routes/index"));

var _admin = _interopRequireDefault(require("./routes/admin"));

var _region = _interopRequireDefault(require("./routes/region"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // view engine setup

app.set("views", _path["default"].join(__dirname, "views"));
app.set("view engine", "pug");
app.use(_express["default"]["static"]("public"));
app.use((0, _helmet["default"])({
  contentSecurityPolicy: false
}));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
app.get("*", function (request, response, next) {
  _fs["default"].readdir("./data", function (error, filelist) {
    request.list = filelist;
    next();
  });
});
app.use("/", _index["default"]);
app.use("/admin", _admin["default"]);
app.use("/regions", _region["default"]); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render("error", {
    err: err
  });
});
module.exports = app;