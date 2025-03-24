const boxes = document.querySelectorAll(".box");

boxes.forEach(element => {
  element.addEventListener("click", () => {
    if (element.classList.contains("box-one")) {
      document.body.style.backgroundColor = "red";
    } else if (element.classList.contains("box-two")) {
      document.body.style.backgroundColor = "green";
    } else if (element.classList.contains("box-three")) {
      document.body.style.backgroundColor = "blue";
    } else if (element.classList.contains("box-four")) {
      document.body.style.backgroundColor = "yellow";
    } else if (element.classList.contains("box-five")) {
      document.body.style.backgroundColor = "orange";
    } else if (element.classList.contains("box-six")) {
      document.body.style.backgroundColor = "purple";
    } else if (element.classList.contains("box-seven")) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });
});
