const tabLinks = document.querySelectorAll(".tab-links");

tabLinks.forEach(element => {
  element.addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    const tabContentsData = document.querySelectorAll(".tab-content");
    for (let i = 0; i < tabContentsData.length; i++) {
      tabContentsData[i].style.display = "none";
    }

    const tabLinksdata = document.querySelectorAll(".tab-links");
    for (let i = 0; i < tabLinksdata.length; i++) {
      tabLinksdata[i].classList.remove("show");
    }

    tabContent.style.display = "block";
    this.classList.toggle("show");
  });
});

document.querySelector(".tab-links").click();
