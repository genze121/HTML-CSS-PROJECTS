const squareSlider = document.querySelector(".square");
const circleSlider = document.querySelector(".circle");
const sliderData = document.querySelector(".value");

squareSlider.addEventListener("input", () => {
  sliderData.innerHTML = squareSlider.value;
});

circleSlider.addEventListener("input", () => {
  sliderData.innerHTML = circleSlider.value;
});
