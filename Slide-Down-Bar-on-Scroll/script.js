const nav = document.querySelector(".navbar");

window.addEventListener("scroll", scrollHandler);

nav.style.display = "none";

function scrollHandler() {
  if (document.documentElement.scrollTop > 20) {
    nav.style.top = "0";
    nav.style.display = "block";
  } else {
    nav.style.top = "-50px";
  }
}
