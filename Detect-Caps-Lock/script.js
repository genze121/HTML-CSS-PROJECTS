const inputText = document.querySelector(".caps");
const displayText = document.querySelector("p");

inputText.addEventListener("keyup", e => {
    if (e.getModifierState("CapsLock")) {
      displayText.style.display = "block";
    } else {
      displayText.style.display = "none";
    }
});
