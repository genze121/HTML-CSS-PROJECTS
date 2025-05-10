const sliderElementOne = document.querySelector(".slider-one");
const sliderElementTwo = document.querySelector(".slider-two");
const sliderElementThree = document.querySelector(".slider-three");
const displayResult = document.querySelector("span");

sliderElementOne.addEventListener("input", () => {
  displayResult.innerHTML = sliderElementOne.value;
});

sliderElementTwo.addEventListener("input", () => {
  displayResult.innerHTML = sliderElementTwo.value;
});

sliderElementThree.addEventListener("input", () => {
  displayResult.innerHTML = sliderElementThree.value;
});
