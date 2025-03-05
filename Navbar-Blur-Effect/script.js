const navbarElement = document.querySelector(".navbar");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    navbarElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    navbarElement.style.backgroundColor = "#000";
  }
}
