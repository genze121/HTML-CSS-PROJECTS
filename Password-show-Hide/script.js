const passwordInput = document.querySelector(".password");
const checkboxInput = document.querySelector(".checkbox");

checkboxInput.addEventListener("click", showPassword);

function showPassword() {
  console.log(passwordInput.value);
  if (passwordInput.value === "" || passwordInput.value === undefined) {
    alert("Enter your password first");
    return;
  }
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordInput.style.padding = "1rem";
    passwordInput.style.width = "300px";
    passwordInput.style.margin = "10px 10px";
  } else {
    passwordInput.type = "password";
  }
}
