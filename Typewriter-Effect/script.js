const startButton = document.querySelector("button");
const textAreaContent = document.querySelector(".textarea");
const typingText = "Hello World!";
let i = 0;

startButton.addEventListener("click", typeWriter);

function typeWriter() {
  const timer = setInterval(typeWriter, 500);
  if (i > typingText.length) {
    clearInterval(timer);
  } else {
    textAreaContent.innerHTML += typingText.charAt(i);
    i++;
  }
}
