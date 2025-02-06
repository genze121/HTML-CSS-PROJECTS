const inputElement = document.querySelector(".trigger");
const clickButton = document.querySelector("button");

inputElement.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    alert("Hello World");
    clickButton.click();
  }
});
