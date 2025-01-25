const videoContent = document.querySelector(".video");
const clickButton = document.querySelector("button");

clickButton.addEventListener("click", () => {
  if (!videoContent.paused) {
    videoContent.pause();
    clickButton.innerHTML = "Play";
  } else {
    videoContent.play();
    clickButton.innerHTML = "Pause";
  }
});
