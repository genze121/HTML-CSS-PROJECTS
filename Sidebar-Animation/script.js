const sidePanelBar = document.querySelector(".side-panel");
const menuButton = document.querySelector(".menu-bar");
const closeButton = document.querySelector(".close-icon");

menuButton.addEventListener("click", showSidePanel);

closeButton.addEventListener("click", hideSidePanel);

function showSidePanel() {
  sidePanelBar.style.width = "300px";
}

function hideSidePanel() {
  sidePanelBar.style.width = "0";
}

window.addEventListener("click", e => {
  if (e.target === sidePanelBar) {
    sidePanelBar.style.width = "0%";
  }
});
