const spanElement = document.querySelector("span");
const inputElement = document.querySelector(".red");

inputElement.addEventListener("input", () => {
  spanElement.innerHTML = inputElement.value;
});
