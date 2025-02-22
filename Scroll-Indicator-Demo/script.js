const scrollIndicator = document.querySelector(".scroll-indicator");

document.addEventListener("scroll", scrollIndicatorHelper);

function scrollIndicatorHelper() {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollerBar = Math.floor(scrollTop / height * 100) + 1;

  scrollIndicator.style.width = scrollerBar + "%";
}
