const toggleButton = document.querySelector("button");
const toggleText = document.querySelector("h1");

toggleButton.addEventListener("click", toggleTextWrap);

function toggleTextWrap() {
  console.log(toggleText);
  if (toggleText.innerHTML === "Hello World") {
    toggleText.innerHTML = "Swapped Text";
  } else {
    toggleText.innerHTML = "Hello World";
  }
}
