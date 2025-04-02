const navbarElement = document.querySelector(".navbar");

window.addEventListener("scroll", shrinkNavbar);

function shrinkNavbar() {
  if (
    window.pageYOffset > 30 ||
    document.documentElement.scrollTop > 30 ||
    window.scrollY > 30
  ) {
    navbarElement.style.padding = "1rem";
  } else {
    navbarElement.style.padding = "3rem";
  }
}
