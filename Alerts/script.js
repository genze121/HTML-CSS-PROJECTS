const successAlert = document.querySelector(".success-alert");
const dangerAlert = document.querySelector(".danger-alert");
const infoAlert = document.querySelector(".info-alert");
const warningAlert = document.querySelector(".warning-alert");
const dangerIcon = document.querySelector(".danger-icon");
const successIcon = document.querySelector(".success-icon");
const infoIcon = document.querySelector(".info-icon");
const warningIcon = document.querySelector(".warning-icon");

dangerIcon.addEventListener("click", () => {
  dangerAlert.style.opacity = "0";
  settimeout(() => {
    dangerAlert.style.display = "none";
  }, 600);
});

successIcon.addEventListener("click", () => {
  successAlert.style.opacity = "0";
  setTimeout(() => {
    successAlert.style.display = "none";
  }, 600);
});

infoIcon.addEventListener("click", () => {
  infoAlert.style.opacity = "0";
  settimeout(() => {
    infoAlert.style.display = "none";
  }, 600);
});

warningIcon.addEventListener("click", () => {
  warningAlert.style.opacity = "0";
  settimeout(() => {
    warningAlert.style.display = "none";
  }, 600);
});
