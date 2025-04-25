const scrollIndicatorElement = document.querySelector(".scroll");

window.addEventListener("scroll", scrollIndicatorHandler);

function scrollIndicatorHandler() {
  const scrollCursorPosition = document.documentElement.scrollTop;

  const scrollIndicator =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPosition =
    Math.floor(scrollCursorPosition / scrollIndicator * 100) + 1;

  scrollIndicatorElement.style.width = scrollPosition + "%";
}
