const countTimer = document.querySelector(".count-timer");

const countTimerElemet = new Date("Feb 11, 2025 15:37:25").getTime();

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countTimerElemet - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(distance % (1000 * 60) / 1000);
  countTimer.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    countTimer.innerHTML = "Expired";
  }
}, 1000);
