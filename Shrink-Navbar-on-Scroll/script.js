const nav = document.querySelector(".navbar");

window.addEventListener("scroll", navbarScroll);

function navbarScroll() {
  if (document.documentElement.scrollTop > 80) {
    nav.style.padding = "1.2rem";
    nav.style.fontSize = "15px";
  } else {
    nav.style.padding = "3rem";
    nav.style.fontSize = "25px";
  }
}
