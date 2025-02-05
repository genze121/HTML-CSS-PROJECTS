const scroller = document.querySelector(".scroll");

scroller.addEventListener("click", scrollHandler);

function scrollHandler() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
