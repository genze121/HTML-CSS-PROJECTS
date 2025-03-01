const folderElement = document.querySelector("#folder");

animateFolder();

setInterval(animateFolder, 2000);

function animateFolder() {
  folderElement.innerHTML = "&#xf114";

  setTimeout(() => {
    folderElement.innerHTML = "&#xf115";
  }, 1000);
}
