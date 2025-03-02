const handElement = document.querySelector("#hand");

animateHand();

setInterval(animateHand, 4000);

function animateHand() {
  handElement.innerHTML = "&#xf25a;";

  setTimeout(() => {
    handElement.innerHTML = "&#xf256;";
  }, 1000);

  setTimeout(() => {
    handElement.innerHTML = "&#xf259;";
  }, 2000);

  setTimeout(() => {
    handElement.innerHTML = "&#xf256;";
  }, 3000);
}
