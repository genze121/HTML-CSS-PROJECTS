const tabLinks = document.querySelectorAll(".tab-links");

tabLinks.forEach(element => {
  element.addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    const tabLinksButton = document.querySelectorAll(".tab-links");
    const tabContents = document.querySelectorAll(".tab-content");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }

    for (let j = 0; j < tabLinksButton.length; j++) {
      if (tabLinksButton[j] === this) {
        if (tabLinksButton[j].classList.contains("red")) {
          tabLinksButton[j].style.backgroundColor = "red";
        } else if (tabLinksButton[j].classList.contains("green")) {
          tabLinksButton[j].style.backgroundColor = "green";
        } else if (tabLinksButton[j].classList.contains("blue")) {
          tabLinksButton[j].style.backgroundColor = "blue";
        } else {
          tabLinksButton[j].style.backgroundColor = "orangeRed";
        }
      } else {
        tabLinksButton[j].style.backgroundColor = "";
      }
    }

    tabContent.style.display = "block";
  });
});

document.querySelector(".tab-links").click();
