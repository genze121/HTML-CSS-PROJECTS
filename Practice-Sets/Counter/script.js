const decrementButton = document.querySelector(".dec-button");
const incrementButton = document.querySelector(".inc-button");
const displayValue = document.querySelector(".updated-value");

decrementButton.addEventListener("click", () => {
  let decCounter = displayValue.innerText;
  decCounter--;
  if (decCounter < 0) return;
  displayValue.innerText = decCounter;
});

incrementButton.addEventListener("click", () => {
  let incCounter = parseInt(displayValue.innerText);
  incCounter++;
  displayValue.innerText = incCounter;
});
