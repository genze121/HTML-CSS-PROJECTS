const hamBurgerIconElement = document.querySelector(".ham");
const sideNavigationPanelElement = document.querySelector(".side-panel");
const closeIconElement = document.querySelector(".cross-icon");

hamBurgerIconElement.addEventListener("click", toggleSideNavigationPanel);

closeIconElement.addEventListener("click", () => {
  sideNavigationPanelElement.classList.remove("active");
});

function toggleSideNavigationPanel() {
  sideNavigationPanelElement.classList.toggle("active");
}