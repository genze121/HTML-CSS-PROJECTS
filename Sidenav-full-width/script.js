const sidenav = document.querySelector(".side-nav");
const clickButton = document.querySelector("button");
const closeButton = document.querySelector(".close-icon");

clickButton.addEventListener("click", fullWidthNavigation);

closeButton.addEventListener("click", closeFullWidthNavigation);

function fullWidthNavigation() {
  sidenav.style.width = "100%";
}

function closeFullWidthNavigation() {
  sidenav.style.width = "0";
}
