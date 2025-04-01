const decrementButton = document.querySelector(".decrement");
const incrementButton = document.querySelector(".increment");
const resetButton = document.querySelector(".reset-btn");
const headerElement = document.querySelector("h1");
const inputElement = document.querySelector(".number");

decrementButton.addEventListener("click", decrementButtonHandler);
incrementButton.addEventListener("click", incrementButtonHandler);
resetButton.addEventListener("click", resetButtonHandler);

function decrementButtonHandler() {
  const decrementData = parseInt(inputElement.value);
  const counter = parseInt(headerElement.innerText);
  headerElement.innerHTML = counter - decrementData;
}

function incrementButtonHandler() {
  const incrementData = parseInt(inputElement.value);
  const counter = parseInt(headerElement.innerText);
  headerElement.innerHTML = counter + incrementData;
}

function resetButtonHandler() {
  headerElement.innerHTML = 0;
  inputElement.value = "1";
}
