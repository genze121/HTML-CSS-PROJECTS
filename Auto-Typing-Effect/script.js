const textareaElement = document.querySelector(".typing");
const typingText = "Hello, this is an auto-typing effect!";

let index = 0;

// using setTimeout
autoType();

//using setInterval
intervalTyping();

function autoType() {
  if (index <= typingText.length) {
    textareaElement.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(autoType, 200);
  }
}

function intervalTyping() {
  const intervalID = setInterval(timer, 200);
  function timer() {
    if (index === typingText.length) {
      clearInterval(intervalID);
      index = 0;
    } else {
      textareaElement.innerHTML += typingText.charAt(index);
      index++;
    }
  }
}
