const tabHeaderElement = document.querySelectorAll(".tab-header");
const tabContentElement = document.querySelectorAll(".tab-content");

tabHeaderElement.forEach(element => {
  element.addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    for (let i = 0; i < tabHeaderElement.length; i++) {
      tabContentElement[i].style.display = "none";
    }

    for (let i = 0; i < tabHeaderElement.length; i++) {
      tabHeaderElement[i].classList.remove("active");
    }

    for (let i = 0; i < tabHeaderElement.length; i++) {
      if (this.dataset.tab === tabHeaderElement[i].dataset.tab) {
        if (tabHeaderElement[i].classList.contains("london")) {
          tabHeaderElement[i].style.backgroundColor = "red";
          tabContentElement[i].style.backgroundColor = "red";
        } else if (tabHeaderElement[i].classList.contains("paris")) {
          tabHeaderElement[i].style.backgroundColor = "blue";
          tabContentElement[i].style.backgroundColor = "blue";
        } else if (tabHeaderElement[i].classList.contains("newYork")) {
          tabHeaderElement[i].style.backgroundColor = "purple";
          tabContentElement[i].style.backgroundColor = "purple";
        } else {
          tabHeaderElement[i].style.backgroundColor = "violet";
          tabContentElement[i].style.backgroundColor = "violet";
        }
      } else {
        tabHeaderElement[i].style.backgroundColor = "";
      }
    }

    tabContent.style.display = "block";
    this.classList.toggle("active");
  });
});

document.querySelector(".tab-header").click();
