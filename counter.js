const newYear = "1 Jan 2024";
let secondsEl = document.getElementById("seconds");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let daysEl = document.getElementById("days");

function countdown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();
  let totalSeconds = (newYearsDate - currentDate) / 1000;
  let seconds = Math.floor(totalSeconds) % 60;
  let mins = Math.floor(totalSeconds / 60) % 60;
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let days = Math.floor(totalSeconds / 3600 / 24);

  secondsEl.textContent = timeFormat(seconds);
  hoursEl.textContent = timeFormat(hours);
  minutesEl.textContent = timeFormat(mins);
  daysEl.textContent = timeFormat(days);
}

function timeFormat(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}
countdown();
setInterval(countdown, 1000);
