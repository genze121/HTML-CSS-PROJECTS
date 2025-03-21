const containerElement = document.querySelector(".container");
const imageURL = "https://robohash.org/";

function generateRandomImage() {
  const randomID = Math.floor(Math.random() * 100);
  return `${imageURL}${randomID}`;
}

function loadImages(num = 10) {
  let counter = 0;
  while (counter < num) {
    let divElement = document.createElement("div");
    divElement.classList.add("box");
    let image = document.createElement("img");
    image.src = generateRandomImage();
    divElement.appendChild(image);
    containerElement.appendChild(divElement);
    counter++;
  }
}

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    document.documentElement.scrollHeight - 10
  ) {
    loadImages();
  }
});

loadImages();
