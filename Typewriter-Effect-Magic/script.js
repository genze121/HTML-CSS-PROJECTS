const paragraphElement = document.querySelector(".typewriter");
const typeButton = document.querySelector("button");
const textElement =
  " Lorem ipsum typing effect! Great stuff! Cant wait to check out the Try it Yourself!";

let index = 0;

typeButton.addEventListener("click", typewriterEffect);

// Approach - 1 [using setTimeout]
function typewriterEffect() {
  if (index <= textElement.length) {
    index++;
    paragraphElement.innerHTML += textElement.charAt(index);
    setTimeout(typewriterEffect, 50);
  }
}

// Approach - 2 [using setInterval]
function typewriterEffect() {
  const intervalID = setInterval(timerEffect, 100);
  function timerEffect() {
    if (index === textElement.length) {
      clearInterval(intervalID);
      index = 0;
    } else {
      index++;
      paragraphElement.innerHTML += textElement.charAt(index);
    }
  }
}
