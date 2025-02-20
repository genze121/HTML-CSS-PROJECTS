const toggleButton = document.querySelector("button");

toggleButton.addEventListener("click", e => {
  document.body.classList.toggle("dark-mode");
});
