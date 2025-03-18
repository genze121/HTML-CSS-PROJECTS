const navbarComponent = document.querySelector(".navbar");

window.addEventListener("scroll", navigationBlurryEffect);

function navigationBlurryEffect() {
  if (document.documentElement.scrollTop > 30) {
    navbarComponent.classList.add("blurry");
  } else {
    navbarComponent.classList.remove("blurry");
    navbarComponent.style.backgroundColor = "transparent";
  }
}
