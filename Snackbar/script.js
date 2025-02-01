const snackbarDetails = document.querySelector("#snackbar");
const snackbarButton = document.querySelector("button");

snackbarButton.addEventListener("click", showSnackbar);

function showSnackbar() {
  snackbarDetails.className = "show";
  setTimeout(() => {
    snackbarDetails.className = snackbarDetails.className.replace("show", "");
  }, 3000);
}
