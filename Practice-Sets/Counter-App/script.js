const headerElement = document.querySelector("h2");
const decrementButton = document.querySelector(".decrement");
const incrementButton = document.querySelector(".increment");
const resetButton = document.querySelector(".reset");
const inputElement = document.querySelector(".number");

decrementButton.addEventListener("click", decrementButtonHandler);
incrementButton.addEventListener("click", incrementButtonHandler);
resetButton.addEventListener("click", resetButtonHandler);

function decrementButtonHandler() {
  const decValue = parseInt(inputElement.value);
  const counter = parseInt(headerElement.innerText);
  headerElement.innerHTML = counter - decValue;
}

function incrementButtonHandler() {
  const incValue = parseInt(inputElement.value);
  const counter = parseInt(headerElement.innerText);
  headerElement.innerText = counter + incValue;
}

function resetButtonHandler() {
  const counter = 0;
  headerElement.innerHTML = counter;
}
