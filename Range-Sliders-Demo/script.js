const customRange = document.querySelector(".custom-range");
const rangeValue = document.querySelector(".range-value");
const squareRange = document.querySelector(".square-range");

customRange.addEventListener("input", () => {
  rangeValue.innerHTML = customRange.value;
});

squareRange.addEventListener("input", () => {
  rangeValue.innerHTML = squareRange.value;
});
