const sideBar = document.querySelector(".side-bar");
const clickButton = document.querySelector("button");
const iconClick = document.querySelector(".click-icon");

clickButton.addEventListener("click", showSideBar);

function showSideBar() {
  sideBar.style.height = "100vh";
}

iconClick.addEventListener("click", closeSideBar);

function closeSideBar() {
  sideBar.style.height = "0";
}
