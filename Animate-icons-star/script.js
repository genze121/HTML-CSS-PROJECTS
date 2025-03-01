const starElement = document.querySelector("#star");

animateStar();

setInterval(animateStar, 3000);

function animateStar() {
  starElement.innerHTML = "&#xf006";

  setTimeout(() => {
    starElement.innerHTML = "&#xf123";
  }, 1000);

  setTimeout(() => {
    starElement.innerHTML = "&#xf005";
  }, 2000);
}
