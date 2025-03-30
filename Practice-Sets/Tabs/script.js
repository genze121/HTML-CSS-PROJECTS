const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    for (let j = 0; j < tabContents.length; j++) {
      tabContents[j].style.display = "none";
    }

    for (let k = 0; k < tabLinks.length; k++) {
      tabLinks[k].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classList.add("active");
  });
}

document.querySelector(".tab-links").click();
