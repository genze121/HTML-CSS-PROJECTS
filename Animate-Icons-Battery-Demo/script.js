const battery = document.querySelector(".fa");

showBatteryIndicator();

setInterval(showBatteryIndicator, 5000);

function showBatteryIndicator() {
  battery.innerHTML = "&#xf244;";

  setTimeout(() => {
    battery.innerHTML = "&#xf243;";
  }, 1000);

  setTimeout(() => {
    battery.innerHTML = "&#xf242;";
  }, 2000);

  setTimeout(() => {
    battery.innerHTML = "&#xf241;";
  }, 3000);

  setTimeout(() => {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}
