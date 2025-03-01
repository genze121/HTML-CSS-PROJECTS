const hourGlassElement = document.querySelector("#hour-glass");

hourGlass();

setInterval(hourGlass, 1000);

function hourGlass() {
  hourGlassElement.innerHTML = "&#xf251";
  setTimeout(() => {
    hourGlassElement.innerHTML = "&#xf252";
  }, 1000);
  setTimeout(() => {
    hourGlassElement.innerHTML = "&#xf253";
  }, 2000);
}
