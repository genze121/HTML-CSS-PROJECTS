const accordionData = document.querySelectorAll(".accordion");

var i;

for (i = 0; i < accordionData.length; i++) {
  accordionData[i].addEventListener("click", function() {
    this.classList.toggle('active');
    const accordionContents = document.querySelectorAll('.accordion-content');
    const accordionContent = accordionContents[i]
    if (accordionContent.style?.display === "block") {
        accordionContent.style.display = "none";
    } else {
        accordionContent.style.display = "block";
        
    }
  });
}
