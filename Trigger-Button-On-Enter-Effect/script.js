const inputElement = document.querySelector(".trigger");

inputElement.addEventListener("keypress", e => {
  e.preventDefault();
  if (e.key === "Enter") {
    document.querySelector("button").click();
    alert("Hello World !");
  }
});
