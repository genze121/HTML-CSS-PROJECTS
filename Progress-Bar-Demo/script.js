const progressBar = document.querySelector(".progress-bar");
const runButton = document.querySelector("button");

let width = 0;

runButton.addEventListener("click", progressLoader);

function progressLoader() {
  if (width === 0) {
    width = 1;
    const timer = setInterval(progressBarInterval, 30);
    function progressBarInterval() {
      if (width === 100) {
        clearInterval(timer);
        width = 0;
      } else {
        width++;
        progressBar.style.width = width + "%";
        progressBar.innerHTML = width + "%";
      }
    }
  }
  progressBar.style.width = "0%";
}
