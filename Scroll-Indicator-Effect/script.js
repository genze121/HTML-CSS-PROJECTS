const scrollingIndicatorElement = document.querySelector(".scroller-bar");

window.addEventListener("scroll", () => {
  scrollingIndicator();
});

function scrollingIndicator() {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollerWidth = Math.floor(scrollTop / height * 100) + 1;
  scrollingIndicatorElement.style.width = scrollerWidth + "%";
}
