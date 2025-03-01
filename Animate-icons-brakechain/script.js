const brakeElement = document.querySelector("#brake-chain");

brakeChain();

setInterval(brakeChain, 2000);

function brakeChain() {
  brakeElement.innerHTML = "&#xf0c1";

  setTimeout(() => {
    brakeElement.innerHTML = "&#xf127";
  }, 1000);
}
