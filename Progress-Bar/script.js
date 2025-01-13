const progress = document.querySelector(".progress");

const clickButton = document.querySelector(".btn");

clickButton.addEventListener("click", moveProgress);

var width = 0;

function moveProgress() {
  if (width === 0) {
    width = 1;
    const timer = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(timer);
        width = 0;
      } else {
        width++;
        progress.style.width = width + "%";
        progress.innerHTML = width + "%";
      }
    }
  }
}
