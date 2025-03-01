const smileElement = document.querySelector("#smile");

animateSmile();

setInterval(animateSmile, 4000);

function animateSmile() {
  smileElement.innerHTML = "&#xf118";

  setTimeout(() => {
    smileElement.innerHTML = "&#xf11a";
  }, 1000);

  setTimeout(() => {
    smileElement.innerHTML = "&#xf119";
  }, 2000);

  setTimeout(() => {
    smileElement.innerHTML = "&#xf11a";
  }, 3000);
}
