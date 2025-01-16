const clickButton = document.querySelector(".btn");
const sideNav = document.querySelector(".navigation");
const closeIcon = document.querySelector(".close-button");

clickButton.addEventListener("click", sideNavigation);

closeIcon.addEventListener("click", closeNavigation);

sideNavButton.addEventListener("click", sideNavNoAnimation);

function sideNavigation() {
  sideNav.style.width = "300px";
}

function closeNavigation() {
  sideNav.style.width = "0";
}
