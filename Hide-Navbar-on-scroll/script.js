const nav = document.querySelector(".navbar");

var previousScroll = window.pageYOffset;

window.addEventListener("scroll", scrollFunc);
function scrollFunc() {
  const currentScroll = window.pageYOffset;
  if (previousScroll > currentScroll) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
  previousScroll = currentScroll;
}
