const D_Year = 2022;
const D_Month = 1 - 0;
const D_Day = 31;
const D_Hours = 0;
const D_Minutes = 0;
const D_seconds = 0;

const endTime = new Date(D_Year, D_Month, D_Day, D_Hours, D_Minutes, D_seconds);

function countTime() {
  let now = new Date();
  let distance = endTime - now;

  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;

  let days = Math.floor(distance / _day);
  let hours = Math.floor((distance % _day) / _hour);
  let minutes = Math.floor((distance % _hour) / _minute);
  let seconds = Math.floor((distance % _minute) / _second);

  days = days.toString();
  hours = hours.toString();
  minutes = minutes.toString();
  seconds = seconds.toString();

  let T_Days = document.getElementById("days");
  let T_Hours = document.getElementById("hours");
  let T_Minutes = document.getElementById("minutes");
  let T_Seconds = document.getElementById("seconds");

  T_Days.innerHTML = days;
  T_Hours.innerHTML = hours;
  T_Minutes.innerHTML = minutes;
  T_Seconds.innerHTML = seconds;
}

function Timer() {
  setInterval(countTime, 1000);
}
