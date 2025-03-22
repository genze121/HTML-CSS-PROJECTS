const containerElement = document.querySelector(".container");
const imageURL = "https://robohash.org/";

function loadImages(loadImage = 10) {
  let counter = 0;
  while (counter < loadImage) {
    let divElement = document.createElement("div");
    divElement.classList.add("box");
    let imageElement = document.createElement("img");
    imageElement.src = generateRandomImage();
    divElement.appendChild(imageElement);
    containerElement.appendChild(divElement);
    counter++;
  }
}

function generateRandomImage() {
  const randomID = Math.floor(Math.random() * 100);
  return `${imageURL}${randomID}`;
}

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >
    document.documentElement.scrollHeight - 10
  ) {
    loadImages();
  }
});

loadImages();
