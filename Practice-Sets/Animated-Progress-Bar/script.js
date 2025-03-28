const progressBarElement = document.querySelector(".progress-bar");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", runProgressBar);

let width = 0;
function runProgressBar() {
  if (width === 0) {
    width = 1;

    const timer = setInterval(timerEvent, 80);

    function timerEvent() {
      if (width === 100) {
        clearInterval(timer);
        width = 0;
      } else {
        width++;
        progressBarElement.style.width = width + "%";
        progressBarElement.innerHTML = width + "%";
      }
    }
  }
}
