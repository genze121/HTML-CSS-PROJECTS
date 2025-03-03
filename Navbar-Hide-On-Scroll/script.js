const navbarElement = document.querySelector(".navbar");

window.addEventListener("scroll", scrollNavigation);

let previousScroll = window.pageYOffset;
function scrollNavigation() {
  const currentScroll = window.pageYOffset;

  if (previousScroll > currentScroll) {
    navbarElement.style.top = "0";
  } else {
    navbarElement.style.top = "-50px";
  }

  previousScroll = currentScroll;
}
