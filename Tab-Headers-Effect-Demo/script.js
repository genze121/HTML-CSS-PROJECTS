const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach(element => {
  element.addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }

    for (let j = 0; j < tabLinks.length; j++) {
      if (tabLinks[j] === this) {
        if (tabLinks[j].classList.contains("red")) {
          tabLinks[j].style.backgroundColor = "red";
        } else if (tabLinks[j].classList.contains("green")) {
          tabLinks[j].style.backgroundColor = "green";
        } else if (tabLinks[j].classList.contains("blue")) {
          tabLinks[j].style.backgroundColor = "blue";
        } else {
          tabLinks[j].style.backgroundColor = "orangeRed";
        }
      } else {
        tabLinks[j].style.backgroundColor = "";
      }
    }

    tabContent.style.display = "block";
  });
});

document.querySelector(".tab-links").click();
