const navbar = document.querySelector(".navbar");

window.onscroll = function() {
  hideNavbarOnScroll();
};

let previousScroll = window.pageYOffset;

// Approach Number - 1.
function hideNavbarOnScroll() {
  const currentScroll = window.pageYOffset;
  if (previousScroll > currentScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-60px";
  }

  previousScroll = currentScroll;
}

// Approach Number - 2.
function hideNavbarOnScroll() {
  if (document.documentElement.scrollTop > 20) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }
}
