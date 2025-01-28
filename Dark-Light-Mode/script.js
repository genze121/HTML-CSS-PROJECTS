const modeButton = document.querySelector("button");

modeButton.addEventListener("click", showHideMode);

function showHideMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}
