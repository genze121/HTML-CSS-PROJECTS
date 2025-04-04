const hamBurger = document.querySelector(".hamburger");
const hamBurgerList = document.querySelector(".ham-list");
const closeIconElement = document.querySelector(".close-icon");

hamBurger.addEventListener("click", showSideBar);
closeIconElement.addEventListener("click", closeSidebar);

function showSideBar() {
  hamBurgerList.style.width = "300px";
}

function closeSidebar() {
  hamBurgerList.style.width = "0";
}

document.addEventListener("click", event => {
  const isClickOutside =
    hamBurgerList.contains(event.target) || hamBurger.contains(event.target);
  if (!isClickOutside) {
    hamBurgerList.style.width = "0";
  }
});