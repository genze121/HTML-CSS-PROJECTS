const boxElement = document.querySelectorAll(".box");
const bodyElement = document.querySelector("body");

boxElement.forEach(element => {
  element.addEventListener("click", e => {
    if (e.target.className.includes("box-1")) {
      bodyElement.style.backgroundColor = "red";
    } else if (e.target.className.includes("box-2")) {
      bodyElement.style.backgroundColor = "yellow";
    } else if (e.target.className.includes("box-3")) {
      bodyElement.style.backgroundColor = "green";
    } else if (e.target.className.includes("box-4")) {
      bodyElement.style.backgroundColor = "pink";
    } else if (e.target.className.includes("box-5")) {
      bodyElement.style.backgroundColor = "blue";
    } else {
      bodyElement.style.backgroundColor = "purple";
    }
  });
});
