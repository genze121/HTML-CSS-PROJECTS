const colorPicker = document.querySelector(".color");

colorPicker.addEventListener("input", changeColor);

function changeColor() {
  document.body.style.backgroundColor = colorPicker.value;
}
