const hamBurger = document.querySelector(".container");

hamBurger.addEventListener("click", toggleHamBurger);
function toggleHamBurger() {
  hamBurger.classList.toggle("active");
}
