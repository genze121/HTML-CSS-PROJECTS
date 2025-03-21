const containerElement = document.querySelector(".container");

function generateRandomImage() {
  const randomId = Math.floor(Math.random() * 100);
  return `https://robohash.org/${randomId}`;
}

function loadImages(num = 10) {
  let imageCounter = 0;
  while (imageCounter < num) {
    let divElement = document.createElement("div");
    divElement.classList.add("box");
    
    let imgElement = document.createElement("img");
    imgElement.src = generateRandomImage();
    
    divElement.appendChild(imgElement);
    containerElement.appendChild(divElement);
    imageCounter++;
  }
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
