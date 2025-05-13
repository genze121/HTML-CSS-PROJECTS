const inputElement = document.querySelector(".input-number");

const buttonElement = document.querySelector(".color-me");

const boxContainer = document.querySelectorAll(".box");

buttonElement.addEventListener("click", displayColor);

inputElement.addEventListener("input", () => {
  if (parseInt(inputElement.value) >= 10) {
    inputElement.value = "";
    return;
  }
});

function displayColor(e) {
  const inputValue = inputElement.value;

  if (inputValue === "") return;

  e.preventDefault();

  boxContainer.forEach(box => box.classList.remove("active"));

  boxContainer.forEach(box => {
    if (parseInt(box.innerHTML) === parseInt(inputValue)) {
      box.classList.add("active");
    }
  });

  inputElement.value = "";
}
