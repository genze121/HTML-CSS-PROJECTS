const toggleButton = document.querySelector("button");
const toggleContent = document.querySelector(".content");

toggleButton.addEventListener("click", toggleHideShow);

function toggleHideShow() {
  if (toggleContent.style.display === "none") {
    toggleContent.style.display = "block";
  } else {
    toggleContent.style.display = "none";
  }
}