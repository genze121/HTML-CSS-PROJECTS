let slideIndex = 0;

showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.querySelectorAll(".dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let j = 0; j < dots.length; j++) {
    dots[j].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 2000);
}
