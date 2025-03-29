const buttonElement = document.querySelector("button");

window.addEventListener("scroll", scrollToTopHandler);

buttonElement.addEventListener("click", scrollHandler);

function scrollHandler() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function scrollToTopHandler() {
  if (document.documentElement.scrollTop > 150) {
    buttonElement.style.display = "block";
  } else {
    buttonElement.style.display = "none";
  }
}
