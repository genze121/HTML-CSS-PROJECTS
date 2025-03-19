const fileName = document.querySelector(".file");
const spanElement = document.querySelector("span");

fileName.addEventListener("change", () => {
  spanElement.innerHTML = fileName.files[0].name;
});
