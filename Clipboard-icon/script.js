const copyIcon = document.querySelector(".copy-icon");
const checkIcon = document.querySelector(".check-icon");

copyIcon.addEventListener("click", copyToCheckIcon);

function copyToCheckIcon() {
  copyIcon.style.display = "none";
  checkIcon.style.display = "block";
  setTimeout(() => {
    copyIcon.style.display = "block";
    checkIcon.style.display = "none";
  }, 2000);
}
