const backToTop = document.querySelector(".top");

window.addEventListener("scroll", scrollToTop);

function scrollToTop() {
  if (document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: "0",
    behavior: "smooth"
  });
});
