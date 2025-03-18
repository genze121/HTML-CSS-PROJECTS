const inputElement = document.querySelector(".text-data");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", inputValidation);

function inputValidation() {
  const inputValue = inputElement?.value;
  if (inputValue === "") {
    alert("Please enter your text");
  } else {
    alert(inputValue);
  }
}
