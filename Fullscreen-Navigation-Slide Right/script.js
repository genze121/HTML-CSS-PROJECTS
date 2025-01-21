const sideBar = document.querySelector(".side-bar");
const buttonClick = document.querySelector("button");
const iconClick = document.querySelector(".click-icon");

buttonClick.addEventListener("click", showSideBar);

function showSideBar() {
  sideBar.style.width = "100%";
}

iconClick.addEventListener("click", closeSideBar);

function closeSideBar() {
  sideBar.style.width = "0";
}
