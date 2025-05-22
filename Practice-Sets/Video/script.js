const buttonElement = document.querySelector("button");
const videoElement = document.querySelector("video");

console.log(videoElement);
buttonElement.addEventListener("click", () => {
  if (videoElement.paused) {
    videoElement.play();
    buttonElement.innerText = "Pause";
  } else {
    videoElement.pause();
    buttonElement.innerText = "Play";
  }
});
