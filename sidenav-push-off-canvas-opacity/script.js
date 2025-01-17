const sideNavigation = document.querySelector(".side-nav");
const clickButton = document.querySelector("button");
const clickIcon = document.querySelector(".click-icon");

clickButton.addEventListener("click", sideNavigationBar);

clickIcon.addEventListener("click", closeSideNavigation);

function sideNavigationBar() {
  sideNavigation.style.width = "300px";
  clickButton.style.marginLeft = "320px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSideNavigation() {
  sideNavigation.style.width = "0";
  clickButton.style.marginLeft = "20px";
  document.body.style.backgroundColor = "#fff";
}
