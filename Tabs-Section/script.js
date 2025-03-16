const tabLinks = document.querySelectorAll(".tab-links");

tabLinks.forEach(element => {
  element.addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    const tabContents = document.querySelectorAll(".tab-content");
    const tabLinksButton = document.querySelectorAll(".tab-links");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }

    for (let j = 0; j < tabLinksButton.length; j++) {
      tabLinksButton[j].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classList.add("active");
  });
});

document.querySelector(".tab-links").click();
