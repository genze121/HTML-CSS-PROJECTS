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

    for (let k = 0; k < tabLinksButton.length; k++) {
      if (tabLinksButton[k] === this) {
        if (tabLinksButton[k].classList.contains("button-1")) {
          tabLinksButton[k].style.backgroundColor = "red";
        } else if (tabLinksButton[k].classList.contains("button-2")) {
          tabLinksButton[k].style.backgroundColor = "green";
        } else if (tabLinksButton[k].classList.contains("button-3")) {
          tabLinksButton[k].style.backgroundColor = "blue";
        } else {
          tabLinksButton[k].style.backgroundColor = "orangeRed";
        }
      } else {
        tabLinksButton[k].style.backgroundColor = "";
      }
    }
    tabContent.style.display = "block";
  });
});

document.querySelector(".tab-links").click();
