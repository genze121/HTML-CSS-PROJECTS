const navbarElement = document.querySelector(".navbar");

let previousScroll = window.pageYOffset;

window.addEventListener("scroll", navbarOnScroll);

// Approach - 1
function navbarOnScroll() {
  if (window.scrollY > 20) {
    navbarElement.style.top = "-50px";
  } else {
    navbarElement.style.top = "0px";
  }
}

// Approach - 2
function navbarOnScroll() {
  const currentScroll = window.pageYOffset;
  if (previousScroll > currentScroll) {
    navbarElement.style.top = "0px";
  } else {
    navbarElement.style.top = "-50px";
  }

  previousScroll = currentScroll;
}
