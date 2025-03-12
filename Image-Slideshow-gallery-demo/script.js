let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlides(n) {
  showSlides((slideIndex = n));
}

function showSlides(index) {
  let slides = document.getElementsByClassName("mySlides");
  let imageGallery = document.getElementsByClassName("demo");
  let captionText = document.querySelector(".caption-text");

  if (index > slides.length) {
    slideIndex = 1;
  }

  if (index < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let j = 0; j < slides.length; j++) {
    imageGallery[j].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  imageGallery[slideIndex - 1].classList.add("active");
  captionText.innerHTML = imageGallery[slideIndex - 1].alt;
}
