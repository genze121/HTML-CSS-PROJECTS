const buttons = document.querySelectorAll(".tab-button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    console.log(this);
    var tabName = this.dataset.tab;
    const tabContent = document.getElementById(tabName);

    const allTabContentData = document.querySelectorAll(".tab-links");
    const tabButton = document.querySelectorAll(".tab-button");

    for (var j = 0; j < allTabContentData.length; j++) {
      allTabContentData[j].style.display = "none";
    }

    for (var k = 0; k < tabButton.length; k++) {
      tabButton[k].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classList.add("active");
  });
}

document.querySelector(".tab-button").click();
