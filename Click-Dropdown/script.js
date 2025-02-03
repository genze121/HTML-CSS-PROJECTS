const hoverButton = document.querySelector("button");
const dropdownContent = document.querySelector(".dropdown-content");

hoverButton.addEventListener("click", showDropdown);

function showDropdown() {
  dropdownContent.classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches(".btn")) {
    let dropdown = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
