const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", toggleText);

function toggleText() {
  const popupText = document.querySelector(".text");
  popupText.classList.toggle("show");
}
