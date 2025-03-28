const textareaElement = document.querySelector(".textarea");
const textElement =
  "This is a sample text for the typing effect demonstration. You can replace it with any text you want to display dynamically.";

let i = 0;

typeWriterEffect();

function typeWriterEffect() {
  if (i <= textElement.length) {
    textareaElement.innerHTML += textElement.charAt(i);
    i++;
    setTimeout(typeWriterEffect, 50);
  }
}
