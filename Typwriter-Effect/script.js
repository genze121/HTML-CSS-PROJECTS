const clickButton = document.querySelector("button");
const textElement = document.querySelector(".text");

let i = 0;
const text = "Hello World!";

clickButton.addEventListener("click", typewriter);

function typewriter() {
  if (i < text.length) {
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, 100);
  }
}
