"use strict";

var D_Year = 2022;
var D_Month = 1 - 0;
var D_Day = 31;
var D_Hours = 0;
var D_Minutes = 0;
var D_seconds = 0;
var endTime = new Date(D_Year, D_Month, D_Day, D_Hours, D_Minutes, D_seconds);

function countTime() {
  var now = new Date();
  var distance = endTime - now;
  var _second = 1000;

  var _minute = _second * 60;

  var _hour = _minute * 60;

  var _day = _hour * 24;

  var days = Math.floor(distance / _day);
  var hours = Math.floor(distance % _day / _hour);
  var minutes = Math.floor(distance % _hour / _minute);
  var seconds = Math.floor(distance % _minute / _second);
  days = days.toString();
  hours = hours.toString();
  minutes = minutes.toString();
  seconds = seconds.toString();
  var T_Days = document.getElementById("days");
  var T_Hours = document.getElementById("hours");
  var T_Minutes = document.getElementById("minutes");
  var T_Seconds = document.getElementById("seconds");
  T_Days.innerHTML = days;
  T_Hours.innerHTML = hours;
  T_Minutes.innerHTML = minutes;
  T_Seconds.innerHTML = seconds;
}

function Timer() {
  setInterval(countTime, 1000);
}