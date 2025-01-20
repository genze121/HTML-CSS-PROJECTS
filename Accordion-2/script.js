const accordionTitle = document.querySelector(".title");
const accordionData = document.querySelectorAll(".accordion");

accordionData.forEach(element => {
  element.addEventListener("click", () => {
    for (let i = 0; i < accordionData.length; i++) {
      if (accordionData[i] !== element) {
        accordionData[i].classList.remove("active");
      } else {
        element.classList.toggle("active");
      }
    }
  });
});
