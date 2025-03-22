const colorPicker = document.querySelector(".picker");
const header = document.querySelector("h2");

colorPicker.addEventListener("input", changeColorPicker);

function changeColorPicker() {
  if (colorPicker.value === "#ffffff") {
    header.style.color = "#000";
    return;
  }
  header.style.color = "#fff";
  document.body.style.backgroundColor = colorPicker.value;
}
