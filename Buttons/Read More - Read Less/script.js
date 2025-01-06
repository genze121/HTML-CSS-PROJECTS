const dots = document.querySelector("#dots");
const more = document.querySelector("#more");
const button = document.querySelector(".button-text");

button.addEventListener("click", () => {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    button.innerHTML = "Read More";
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    button.innerHTML = "Read Less";
  }
});
