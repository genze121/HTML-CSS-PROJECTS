const redColor = document.querySelector(".red");
const yellowColor = document.querySelector(".yellow");
const greenColor = document.querySelector(".green");

trafficLightIndicators();
setInterval(trafficLightIndicators, 4000);

function trafficLightIndicators() {
  setTimeout(() => {
    redColor.style.backgroundColor = "red";
    yellowColor.style.backgroundColor = "gray";
    greenColor.style.backgroundColor = "gray";
  }, 1000);

  setTimeout(() => {
    yellowColor.style.backgroundColor = "yellow";
    redColor.style.backgroundColor = "gray";
    greenColor.style.backgroundColor = "gray";
  }, 2000);

  setTimeout(() => {
    greenColor.style.backgroundColor = "green";
    redColor.style.backgroundColor = "gray";
    yellowColor.style.backgroundColor = "gray";
  }, 3000);
}
