const tabLinks = document.querySelectorAll(".tab-link");
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
          tabLinks[j].style.backgroundColor = "purple";
        }
      } else {
        tabLinks[j].style.backgroundColor = "";
      }
    }

    for (let k = 0; k < tabLinks.length; k++) {
      tabLinks[k].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classList.add("active");
  });
});

document.querySelector(".tab-link").click();
