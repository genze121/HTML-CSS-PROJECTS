const navbar = document.querySelector(".navbar");
window.onscroll = function() {
  scollNavbar();
};

function scollNavbar() {
  if (document.documentElement.scrollTop > 20) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-60px";
  }
}
