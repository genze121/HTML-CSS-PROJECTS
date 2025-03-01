const batteryElement = document.querySelector("#battery");

chargeBattery();

setInterval(chargeBattery, 5000);

function chargeBattery() {
  batteryElement.innerHTML = "&#xf244;";
  setTimeout(() => {
    batteryElement.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(() => {
    batteryElement.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(() => {
    batteryElement.innerHTML = "&#xf241";
  }, 3000);
  setTimeout(() => {
    batteryElement.innerHTML = "&#xf240";
  }, 4000);
}
