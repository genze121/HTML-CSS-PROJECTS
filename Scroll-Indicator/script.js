const scrollIndicator = document.querySelector(".bar");

window.addEventListener("scroll", scrollIndicatorFunction);

function scrollIndicatorFunction() {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = Math.floor(scrollTop / height * 100) + 1;

  scrollIndicator.style.width = scrolled + "%";
}
