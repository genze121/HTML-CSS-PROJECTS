const progressBar = document.querySelector(".scrolling");

window.onscroll = function() {
  onScrollProgress();
};

function onScrollProgress() {
  const windowScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = Math.floor(windowScroll / height * 100) + 1; 

  progressBar.style.width = scrolled + "%";
  progressBar.innerHTML = scrolled + "%";
}
