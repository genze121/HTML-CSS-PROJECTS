const inputElement = document.querySelector(".input-text");

inputElement.addEventListener("focus", () => {
  inputElement.value = "";
});
