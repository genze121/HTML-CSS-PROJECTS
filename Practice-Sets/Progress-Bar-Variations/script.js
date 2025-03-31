const progressBar = document.querySelector(".progress-bar");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

let width = 0;
let timer;

document.getElementById("stop").disabled = true;

startButton.addEventListener("click", startProgressBar);
stopButton.addEventListener("click", stopProgressBar);
resetButton.addEventListener("click", resetProgressBar);

function startProgressBar() {
  progressBarAnimation();
}

function progressBarAnimation() {
  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = true;
  stopButton.style.cursor = "pointer";
  timer = setInterval(timerFrame, 100);
  function timerFrame() {
    if (width === 100) {
      clearInterval(timer);
      width = 0;
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }
}

function stopProgressBar() {
  document.getElementById("stop").disabled = true;
  stopButton.style.cursor = "no-drop";
  document.getElementById("start").disabled = false;
  clearInterval(timer);
}

function resetProgressBar() {
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  stopButton.style.cursor = "no-drop";
  clearInterval(timer);
  width = 0;
  progressBar.style.width = width + "%";
}
