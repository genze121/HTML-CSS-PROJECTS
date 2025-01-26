const spanSquareElement = document.querySelector(".square-span");
const spanCircleElement = document.querySelector(".circle-span");
const spanImageElement = document.querySelector(".image-span");
const squareBox = document.querySelector(".square");
const circleBox = document.querySelector(".circle");
const imageBox = document.querySelector(".image");

squareBox.oninput = function() {
  spanSquareElement.innerHTML = squareBox.value;
};

circleBox.oninput = function() {
  spanCircleElement.innerHTML = circleBox.value;
};

imageBox.oninput = function() {
  spanImageElement.innerHTML = imageBox.value;
};
