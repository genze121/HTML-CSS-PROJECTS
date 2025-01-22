const buttons = document.querySelectorAll(".tab-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    const allTabButtons = document.querySelectorAll(".tab-button");
    const allTabContents = document.querySelectorAll(".tab-content");
    for (let j = 0; j < allTabContents.length; j++) {
      allTabContents[j].style.display = "none";
    }

    for (let k = 0; k < allTabContents.length; k++) {
      allTabButtons[k].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classList.add("active");
  });
}

document.querySelector(".tab-button").click();
