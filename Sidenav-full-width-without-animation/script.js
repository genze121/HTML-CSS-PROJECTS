const sideNavigation = document.querySelector(".side-nav");
const clickButton = document.querySelector("button");
const clickIcon = document.querySelector(".click-icon");

clickButton.addEventListener("click", fullWidthNavigation);

clickIcon.addEventListener("click", closeSideNavigation);

function fullWidthNavigation() {
  sideNavigation.style.width = "100%";
}

function closeSideNavigation() {
  sideNavigation.style.width = "0";
}
