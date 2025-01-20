const clickIconButton = document.querySelector(".close-icon");
const menuBarButton = document.querySelector(".menu-bar");
const sideNav = document.querySelector(".side-nav");

menuBarButton.addEventListener("click", showSideNavigationBar);
clickIconButton.addEventListener("click", closeSideNavigationBar);

function showSideNavigationBar() {
  sideNav.style.width = "300px";
}

function closeSideNavigationBar() {
  sideNav.style.width = "0";
}
