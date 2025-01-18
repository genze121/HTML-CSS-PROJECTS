const dialogBox = document.querySelector(".dialog");
const clickButton = document.querySelector("button");
const closeButton = document.querySelector(".close");

clickButton.addEventListener("click", openDialogBox);

closeButton.addEventListener("click", closeDialogBox);

function openDialogBox() {
  dialogBox.style.display = "block";
}

function closeDialogBox() {
  dialogBox.style.display = "none";
}
