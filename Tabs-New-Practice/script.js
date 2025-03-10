const tabLinks = document.querySelectorAll(".tab-links");

tabLinks.forEach(element => {
  element.addEventListener("click", function() {
    const tabLink = this.dataset.tab;
    const tabContent = document.getElementById(tabLink);

    const allTabContents = document.querySelectorAll(".tab-content");
    const allTabLinks = document.querySelectorAll(".tab-links");

    for (let i = 0; i < allTabContents.length; i++) {
      allTabContents[i].style.display = "none";
    }

    for (let j = 0; j < allTabLinks.length; j++) {
      allTabLinks[j].classList.remove("show");
    }

    tabContent.style.display = "block";
    this.classList.add("show");
  });
});

document.querySelector(".tab-links").click();
