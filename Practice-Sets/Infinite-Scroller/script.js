const containerElement = document.querySelector(".container");
const header = document.querySelector("h3");

const API_URL = "https://robohash.org";

function generateRandomImage() {
  const randomID = Math.floor(Math.random() * 100);
  return `${API_URL}/${randomID}`;
}

function loadImages() {
  header.classList.add("loader");
  setTimeout(() => {
    let counter = 0;
    while (counter < 10) {
      const divElement = document.createElement("div");
      divElement.classList.add("box");
      const imageElement = document.createElement("img");
      imageElement.src = generateRandomImage();
      divElement.appendChild(imageElement);
      containerElement.appendChild(divElement);
      counter++;
    }
    header.classList.remove("loader");
  }, 1000);
}

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 10
  ) {
    loadImages();
  }
});

loadImages();
