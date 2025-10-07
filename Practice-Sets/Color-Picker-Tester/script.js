const bodyElement = document.querySelector("body");
const colorInputElement = document.querySelector(".picker");

colorInputElement.addEventListener("input", () => {
  bodyElement.style.backgroundColor = colorInputElement.value;
});
