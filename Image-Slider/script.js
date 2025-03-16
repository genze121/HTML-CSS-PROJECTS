let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlides(n) {
  showSlides((slideIndex = n));
}

function showSlides(index) {
  const slides = document.getElementsByClassName("mySlides");
  const captionText = document.querySelector(".caption");
  const imageGallery = document.getElementsByClassName("demo");

  if (index > slides.length) {
    slideIndex = 1;
  }

  if (index < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let j = 0; j < imageGallery.length; j++) {
    imageGallery[j].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  captionText.innerHTML = imageGallery[slideIndex - 1].alt;
  imageGallery[slideIndex - 1].classList.add("active");
}
