const checkingBox = document.querySelector(".checkbox");
const displayText = document.querySelector("span");

checkingBox.addEventListener("change", e => {
  if (e.target.checked) {
    displayText.innerHTML = "Checkbox is checked";
  } else {
    displayText.innerHTML = "";
  }
});
