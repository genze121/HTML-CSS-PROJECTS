const displayResult = document.querySelector(".display-result");
const rangeInputElement = document.querySelector(".range-slider");

rangeInputElement.addEventListener("input", e => {
  displayResult.innerText = e.target.value;
});
