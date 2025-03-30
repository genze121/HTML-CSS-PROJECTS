const defaultSlider = document.querySelector(".default-range-slider");
const rangeSliderOne = document.querySelector(".range-Slider-one");
const rangeSliderTwo = document.querySelector(".range-Slider-two");
const rangeSliderThree = document.querySelector(".range-Slider-three");
const rangeSliderFour = document.querySelector(".range-Slider-four");
const spanElement = document.querySelector("span");

loadSpanData();

function loadSpanData() {
  spanElement.innerHTML = defaultSlider.value;
}

defaultSlider.addEventListener("input", () => {
  spanElement.innerHTML = defaultSlider.value;
});
rangeSliderOne.addEventListener("input", () => {
  spanElement.innerHTML = rangeSliderOne.value;
});

rangeSliderTwo.addEventListener("input", () => {
  spanElement.innerHTML = rangeSliderTwo.value;
});

rangeSliderThree.addEventListener("input", () => {
  spanElement.innerHTML = rangeSliderThree.value;
});

rangeSliderFour.addEventListener("input", () => {
  spanElement.innerHTML = rangeSliderFour.value;
});
