let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(index) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (index > slides.length) {
    slideIndex = 1;
  }

  if (index < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
