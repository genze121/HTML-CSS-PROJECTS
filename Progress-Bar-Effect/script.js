const progressBar = document.querySelector(".progress");
const buttonProgress = document.querySelector("button");

let width = 0;

buttonProgress.addEventListener("click", showProgress);

function showProgress() {
  if (width === 0) {
    width = 1;
    const timer = setInterval(timeFrame, 50);
    function timeFrame() {
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
}
