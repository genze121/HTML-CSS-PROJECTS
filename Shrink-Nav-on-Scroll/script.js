const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  shrinkNavbar();
});

function shrinkNavbar() {
  if (document.documentElement.scrollTop > 20) {
    navbar.style.padding = "1rem";
  } else {
    navbar.style.padding = "3rem";
  }
}
