const hamBurger = document.querySelector(".container");

hamBurger.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamBurger.classList.toggle("active");
}
