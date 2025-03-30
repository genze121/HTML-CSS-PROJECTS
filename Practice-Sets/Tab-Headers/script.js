const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach(element => {
  element.addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }

    for (let k = 0; k < tabLinks.length; k++) {
      if (tabLinks[k] === this) {
        if (tabLinks[k].classList.contains("red")) {
          tabLinks[k].style.backgroundColor = "red";
        } else if (tabLinks[k].classList.contains("blue")) {
          tabLinks[k].style.backgroundColor = "blue";
        } else if (tabLinks[k].classList.contains("green")) {
          tabLinks[k].style.backgroundColor = "green";
        } else {
          tabLinks[k].style.backgroundColor = "orangeRed";
        }
      } else {
        tabLinks[k].style.backgroundColor = "";
      }
    }

    tabContent.style.display = "block";
  });
});

document.querySelector(".tab-links").click();
