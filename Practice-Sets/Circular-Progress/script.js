const progressBarElement = document.querySelector(".progress");

let width = 0;

function showProgressBar() {
  if (width === 0) {
    const timer = setInterval(showTimer, 50);

    function showTimer() {
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

showProgressBar();
