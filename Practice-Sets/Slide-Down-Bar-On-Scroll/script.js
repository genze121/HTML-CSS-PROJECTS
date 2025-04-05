const navbarElement = document.querySelector(".navbar");

window.addEventListener("scroll", slideDownBarOnScroll);

function slideDownBarOnScroll() {
  if (window.scrollY > 20) {
    navbarElement.style.top = "0";
  } else {
    navbarElement.style.top = "-50px";
  }
}
