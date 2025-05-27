const tabHeaderElement = document.querySelectorAll(".tab-header");
const buttonElement = document.querySelector("button");
const tabContentElement = document.querySelectorAll(".tab-content");

tabHeaderElement.forEach(element => {
  element.addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    for (let i = 0; i < tabHeaderElement.length; i++) {
      tabContentElement[i].style.display = "none";
    }
    tabContent.style.display = "block";
  });
});

document.querySelector(".tab-header").click();
