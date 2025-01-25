const modalBox = document.querySelector(".modal");
const clickButton = document.querySelector("button");
const closeButton = document.querySelector(".click-icon");

clickButton.addEventListener("click", () => {
  modalBox.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modalBox.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modalBox) {
    modalBox.style.display = "none";
  }
});
