const sideNavigation = document.querySelector(".side-nav");
const clickButton = document.querySelector("button");
const closeIcon = document.querySelector(".close-icon");

clickButton.addEventListener("click", pushCanvasAnimation);

closeIcon.addEventListener("click", closePushCanvasAnimation);

function pushCanvasAnimation() {
  sideNavigation.style.width = "300px";
  clickButton.style.marginLeft = "320px";
}

function closePushCanvasAnimation() {
  sideNavigation.style.width = "0";
  clickButton.style.marginLeft = "20px";
}
