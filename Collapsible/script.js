const accordionElement = document.querySelector(".accordion");

accordionElement.addEventListener("click", function() {
  this.classList.toggle("active");
  const accordionContent = document.querySelector(".content");
  if (accordionContent.style.maxHeight) {
    accordionContent.style.maxHeight = null;
  } else {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
  }
});
