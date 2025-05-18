const inputElement = document.querySelector(".color-picker");

const bodyElement = document.querySelector("body");

inputElement.addEventListener("input", () => {
  bodyElement.style.backgroundColor = inputElement.value;
});
