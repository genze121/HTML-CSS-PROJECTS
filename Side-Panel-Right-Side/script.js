const sidePanel = document.querySelector(".side-panel");
const hamburgerIcon = document.querySelector(".icon");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", showSidePanel);
closeIcon.addEventListener("click", hideSidePanel);

function showSidePanel() {
  sidePanel.style.width = "100%";
}

function hideSidePanel() {
  sidePanel.style.width = "0";
}
