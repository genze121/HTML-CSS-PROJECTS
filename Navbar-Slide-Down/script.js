const navbarElement = document.querySelector(".navbar");

window.addEventListener("scroll", scrollNavigation);

function scrollNavigation() {
  if (document.documentElement.scrollTop > 20) {
    navbarElement.style.top = "0";
  } else {
    navbarElement.style.top = "-50px";
  }
}
