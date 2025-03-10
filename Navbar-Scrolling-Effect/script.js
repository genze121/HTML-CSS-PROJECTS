const navbarElement = document.querySelector(".navbar");

window.onscroll = function() {
  navigatingNavbar();
};

function navigatingNavbar() {
  if (document.documentElement.scrollTop > 20) {
    navbarElement.style.padding = "1.2rem";
  } else {
    navbarElement.style.padding = "3rem";
  }
}
