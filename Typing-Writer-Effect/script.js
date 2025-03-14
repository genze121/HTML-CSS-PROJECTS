const textareaContent = document.querySelector(".textarea");
const textData = "Hello World! How are you ?";
let index = 0;

typewriterEffect();

function typewriterEffect() {
  if (index <= textData.length) {
    textareaContent.innerHTML += textData.charAt(index);
    index++;
    setTimeout(typewriterEffect, 200);
  }
}
