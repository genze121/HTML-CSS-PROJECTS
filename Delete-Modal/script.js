const deleteModalBox = document.querySelector(".modal");
const deleteButton = document.querySelector(".delete-button");
const closeButton = document.querySelector(".close-icon");
const cancelButton = document.querySelector(".cancel");
const deleteButtonModal = document.querySelector(".delete");

closeButton.addEventListener("click", () => {
  deleteModalBox.style.display = "none";
});

deleteButton.addEventListener("click", () => {
  deleteModalBox.style.display = "block";
});

cancelButton.addEventListener("click", () => {
  deleteModalBox.style.display = "none";
});

deleteButtonModal.addEventListener("click", () => {
  deleteModalBox.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === deleteModalBox) {
    deleteModalBox.style.display = "none";
  }
});
